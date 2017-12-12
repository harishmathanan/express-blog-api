module.exports = {
  rootDisplay() {
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
  }
}
