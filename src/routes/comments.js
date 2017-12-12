const store = require('../store');

module.exports = {
  getComments (req, res) {
    req.check('postId').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;

    if (!store.posts[postId]) {
      res.status(404).send('Resource not found');
    }

    res.status(200).send(store.posts[postId].comments);
  },

  addComment(req, res) {
    req.check('postId').notEmpty();
    req.check('text').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;

    if (!store.posts[postId]) {
      res.status(404).send('Resource not found');
    }

    const commentId = store.posts[postId].comments.length;

    store.posts[postId].comments.push(req.body);
    res.status(200).send({ id: commentId });
  },

  updateComment(req, res) {
    req.check('postId').notEmpty();
    req.check('commentId').notEmpty();
    req.check('text').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;
    const commentId = req.params.commentId;

    if (!store.posts[postId] || !store.posts[postId].comments[commentId]) {
      res.status(404).send('Resource not found');
    }

    store.posts[postId].comments[commentId] = req.body;
    res.status(200).send({ id: commentId });
  },

  removeComment(req, res) {
    req.check('postId').notEmpty();
    req.check('commentId').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;
    const commentId = req.params.commentId;

    if (!store.posts[postId] || !store.posts[postId].comments[commentId]) {
      res.status(404).send('Resource not found');
    }

    store.posts[postId].comments.splice(commentId, 1);
    res.status(200).send({ id: commentId });
  }
};
