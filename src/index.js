const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const routes = require('./routes');
const content = require('./content');

const app = express();
const port = 3000;

// config
app.set('Content-Type', 'application/json');

// middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(validator());

// routes
app.get('/', (req, res) => {
  res.status(200).send(content.rootDisplay());
});

// posts endpoints
app.get('/posts', routes.posts.getPosts);
app.post('/posts', routes.posts.addPost);
app.put('/posts/:postId', routes.posts.updatePost);
app.delete('/posts/:postId', routes.posts.removePost);

// comments endpoints
app.get('/posts/:postId/comments', routes.comments.getComments);
app.post('/posts/:postId/comments', routes.comments.addComment);
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment);
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment);

app.all('*', (req, res) => {
  res.status(404).send('Invalid URI endpoint');
});

// run
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
