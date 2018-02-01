import { configure, addDecorator } from 'storybook-react'
import { setOptions } from '@storybook/addon-options'
import { checkA11y } from '@storybook/addon-a11y'

import { homepage, name } from '../package.json'

setOptions({
  name,
  url: homepage,
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sidebarAnimations: false,
})

addDecorator(checkA11y)

function loadStories() {
  require('../index')
}

configure(loadStories, module)
