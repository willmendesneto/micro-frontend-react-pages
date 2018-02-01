const { name, description } = require('./package.json')

module.exports = {
  html: {
    title: `${name} | ${description}`,
  },
  entry: [
    'storybook/config.js',
    'storybook/addons.js'
  ],
  presets: [
    require('poi-preset-storybook')()
  ],
  removeDist: true,
}
