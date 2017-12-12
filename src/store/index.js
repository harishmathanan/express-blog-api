let store = {
  posts: [
    {
      title: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      body: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        { text: 'Cruel…..var { house, mouse} = No type optimization at all' },
        { text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.' },
        { text: '(p1,p2)=>{ … } ,i understand this ,thank you !' }
      ]
    },
    {
      title: 'Mastering Nodejs Development',
      url: 'https://webapplog.com/nodejs',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta arcu accumsan aliquam.',
      comments: []
    }
  ]
}

module.exports = store;
