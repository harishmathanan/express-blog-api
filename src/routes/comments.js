comments = [];

module.exports = {
  getComments (req, res) {
    res.status(200).send(comments);
  },

  addComment(req, res) {
    req.check('text').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let comment = {
      text: req.body.text
    };

    comments.push(comment);
    res.status(200).send(comments);
  },

  updateComment(req, res) {
    req.check('postId').notEmpty();
    req.check('commentId').notEmpty();
    req.check('text').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let id = req.params.commentId;
    let comment = {
      text: req.body.text
    };

    comments[id] = comment;
    res.status(200).send(id);
  },

  removeComment(req, res) {
    req.check('postId').notEmpty();
    req.check('commentId').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let id = req.params.commentId;

    comments.splice(id, 1);
    res.status(200).send(id);
  }
};
