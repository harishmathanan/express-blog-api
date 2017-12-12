const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const routes = require('./routes');

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
  res.status(200).send(rootDisplay());
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

// static text describing routes within API
const rootDisplay = () => {
  return `
    <h1>Express Blog API</h1>

    <p>
      <strong>GET /posts</strong>
      <br/> - returns a collection of posts
    </p>

    <p>
      <strong>POST /posts</strong>
      <br/> - adds a new post
    </p>

    <p>
      <strong>PUT /posts/:postId</strong>
      <br/> - updates a post
    </p>

    <p>
      <strong>DELETE /posts/:postId</strong>
      <br/> - removes a post
    </p>

    <p>
      <strong>GET /posts/:postId/comments</strong>
      <br/> - returns a collection of comments
    </p>

    <p>
      <strong>POST /posts/:postId/comments</strong>
      <br/> - adds a new comment
    </p>

    <p>
      <strong>PUT /posts/:postId/comments/:commentId</strong>
      <br/> - updates a comment
    </p>

    <p>
      <strong>DELETE /posts/:postId/comments/:commentId</strong>
      <br/> - removes a comment
    </p>
  `;
};
