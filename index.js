import { storiesOf } from 'storybook-react'

import HomePage from './src/js/export'

storiesOf('HomePage', module)
  .add('1 Column', () => <HomePage type={'1-column'} />)
  .add('2 Columns', () => <HomePage type={'2-columns'} />)
