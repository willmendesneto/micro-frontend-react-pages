import { storiesOf } from 'storybook-react'

import { HomePage, ListingItemsPage, DocsPage } from './src/js/export'

storiesOf('HomePage', module)
  .add('Page view', () => <HomePage type={'1-column'} />)
storiesOf('ListingItemsPage', module)
  .add('Page view without items', () => <ListingItemsPage type={'1-column'} items={[]} />)
  .add('Page view with items', () => <ListingItemsPage type={'1-column'} />)
storiesOf('DocsPage', module)
  .add('Page view', () => <DocsPage />)
