const store = require('../store');

module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts);
  },

  addPost(req, res) {
    req.check('title').notEmpty();
    req.check('body').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let post = {
      title: req.body.title,
      body: req.body.body,
      url: req.body.url
    };

    store.posts.push(post);
    res.status(200).send(post);
  },

  updatePost(req, res) {
    req.check('postId').notEmpty();
    req.check('title').notEmpty();
    req.check('body').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let id = req.params.postId;
    let post = {
      title: req.body.title,
      body: req.body.body
    };

    posts[id] = post;
    res.status(200).send(id);
  },

  removePost(req, res) {
    req.check('postId').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    let id = req.params.postId;

    posts.splice(id, 1);
    res.status(200).send(id);
  }
};
