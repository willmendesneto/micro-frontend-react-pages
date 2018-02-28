import { storiesOf } from 'storybook-react'

import { HomePage, ListingItemsPage, DocsPage } from './src/js/export'

storiesOf('HomePage', module)
  .add('Page view', () => <HomePage />)
storiesOf('ListingItemsPage', module)
  .add('Page view without items', () => <ListingItemsPage categoryName="My Category" items={[]} />)
  .add('Page view with items', () =>
    <ListingItemsPage
      categoryName="My Category"
      items={[
        { image: 'https://loremflickr.com/250/200/cat', title: 'title 1', description: 'description 1' },
        { image: 'https://loremflickr.com/250/200/nature', title: 'title 2', description: 'description 2' },
        { image: 'https://loremflickr.com/250/200/house', title: 'title 3', description: 'description 3' },
      ]}
    />)
storiesOf('DocsPage', module)
  .add('Page view', () => <DocsPage />)
