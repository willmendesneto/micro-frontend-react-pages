import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'
import hook from 'css-modules-require-hook'

Enzyme.configure({ adapter: new Adapter() })

const exposedProperties = [
  'window',
  'navigator',
  'document',
]

const { window } = new JSDOM('<!doctype html><html><body></body></html>')

global.document = window.document
global.window = window

Object.keys(window)
  .filter(property => typeof global[property] === 'undefined')
  .forEach((property) => {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  })

global.navigator = {
  userAgent: 'node.js',
}

const preventFileRequestInTestByExtensions = (extensions) => {
  extensions.forEach(extension => require.extensions['.scss'] = () => { return null })
}

preventFileRequestInTestByExtensions([
  '.scss',
  '.css',
  '.jpg',
  '.png',
  '.gif',
])

hook({
  generateScopedName: '[local]',
})