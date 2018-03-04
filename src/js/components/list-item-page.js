import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { HowToStart } from 'generator-poi-boilerplate-demo'

import '../../scss/styles.scss'
import '../../scss/list-item-page.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const ListItemPage = ({ item, categoryName }) => {
  return (
    <Fragment>
      <Header />
      <FirstSection title={'Products Page'} description={'What do you want to check it out?'} />
      <section className={`home-page-wrapper is-1-column`}>
        <h1 className="home-page-heading">{categoryName}</h1>
        { Object.keys(item).length > 0 ? (
            <div className="product-list-info">
              <img className={'produc-list-image'} src={item.image} />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ) : <p>Oops! This item is not available :/</p> }
        <a href="/items">Back to List</a>
        <a href="/checkout">Buy this item</a>
      </section>
      <Footer />
    </Fragment>
  )
}

ListItemPage.propTypes = {
  categoryName: PropTypes.string,
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

ListItemPage.defaultProps = {
  item: {},
  categoryName: '',
}

export default ListItemPage
