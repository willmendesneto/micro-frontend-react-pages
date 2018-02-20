import React, { Fragment } from 'react'
import { HowToStart } from 'generator-poi-boilerplate-demo'

import '../../scss/styles.scss'
import '../../scss/list-items-page.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const defaultItems = [
  { image: 'https://loremflickr.com/250/200/cat', title: 'title 1', description: 'description 1' },
  { image: 'https://loremflickr.com/250/200/cat', title: 'title 2', description: 'description 2' },
  { image: 'https://loremflickr.com/250/200/cat', title: 'title 3', description: 'description 3' },
]

const ListItemsPage = ({ items = defaultItems }) => {
  const listItems = items.map(({ image, title, description }) => (
    <li className={'product-list-item'} key={image}>
      <a href="#" className={'product-list-link'}>
        <img className={'produc-list-image'} src={image} />
        <div className="product-list-info">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </a>
    </li>
  ));

  return (
    <Fragment>
      <Header />
      <FirstSection title={'Products Page'} description={'What do you want to check it out?'} />
      <section className={`home-page-wrapper is-1-column`}>
        <h1 className="home-page-heading">Cats</h1>
        {
          !!listItems.length ?
            <ul className={'product-list'}>{listItems}</ul> :
            <p>No items for this category :(</p>
        }
      </section>
      <Footer />
    </Fragment>
  )
}

export default ListItemsPage
