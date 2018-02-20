import React, { Fragment } from 'react'
import { HowToStart } from 'generator-poi-boilerplate-demo'

import '../../scss/styles.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const HomePage = ({ type }) => (
  <Fragment>
    <Header />
    <FirstSection />
    <section className={`home-page-wrapper is-${type}`}>
      <h1 className="home-page-heading">
        <p>This is your `<code className="home-page-code">home-page</code>` component</p>
      </h1>
      <HowToStart />
    </section>
    <Footer />
  </Fragment>
)

export default HomePage
