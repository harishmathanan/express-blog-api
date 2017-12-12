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

    const postId = store.posts.length;

    store.posts.push(req.body);
    res.status(200).send({ id: postId });
  },

  updatePost(req, res) {
    req.check('postId').notEmpty();
    req.check('title').notEmpty();
    req.check('body').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;

    if (!store.posts[postId]) {
      res.status(404).send('Resource not found');
    }

    store.posts[postId] = req.body;
    res.status(200).send({ id: postId });
  },

  removePost(req, res) {
    req.check('postId').notEmpty();

    if (req.validationErrors()) {
      res.status(400).send();
    }

    const postId = req.params.postId;

    if (!store.posts[postId]) {
      res.status(404).send('Resource not found');
    }

    store.posts.splice(postId, 1);
    res.status(200).send({ id: postId });
  }
};
