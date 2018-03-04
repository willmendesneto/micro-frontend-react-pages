import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { HowToStart } from 'generator-poi-boilerplate-demo'

import '../../scss/styles.scss'
import '../../scss/list-items-page.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const ListItemsPage = ({ items, categoryName }) => {
  const listItems = items.map(({ image, title, description }, index) => (
    <li className={'product-list-item'} key={image}>
      <a href={`/items/${index}`} className={'product-list-link'}>
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
        <h1 className="home-page-heading">{categoryName}</h1>
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

ListItemsPage.propTypes = {
  categoryName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

ListItemsPage.defaultProps = {
  items: [],
  categoryName: '',
}

export default ListItemsPage
