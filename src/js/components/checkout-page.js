import React, { Fragment } from 'react'

import '../../scss/styles.scss'
import '../../scss/checkout-page.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const CheckoutPage = () => (
  <Fragment>
    <Header />
    <FirstSection />
    <section className={`home-page-wrapper is-1-column`}>
      <h1 className="home-page-heading">
        <p>You made it! We will contact you soon!</p>
      </h1>
    </section>
    <Footer />
  </Fragment>
)

export default CheckoutPage
