# Express Blog API
API Web server for blog application with full CRUD operations. Built with Express framework.

## Dependencies
* body-parser
* express
* express-validator
* morgan
* node-dev

## Instructions
1. Ensure machine has Nodejs installed.
2. Download repository to folder or `git clone`.
3. Within the folder run `npm install` from command to install all dependencies.
4. Once complete run `npm run dev` to start up the express server.
5. Navigate to `http://localhost:3000` to view the available endpoints.

## Usage
```
GET /posts
returns a collection of posts.
```

```
POST /posts
adds a new post.
```

```
PUT /posts/:postId
updates a post.
```

```
DELETE /posts/:postId
removes a post.
```

```
GET /posts/:postId/comments
returns a collection of comments.
```

```
POST /posts/:postId/comments
adds a new comment.
```

```
PUT /posts/:postId/comments/:commentId
updates a comment.
```

```
DELETE /posts/:postId/comments/:commentId
removes a comment.
```
