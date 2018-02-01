const { name, description } = require('./package.json')

module.exports = {
  html: {
    title: `${name} | ${description}`,
    template: './index.ejs',
  },
  filename: {
    js: 'js/[name].js',
    css: 'css/style.css',
  },
  entry: './index-library.js',
  removeDist: true,
}