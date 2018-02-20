import React, { Fragment } from 'react'

import '../../scss/styles.scss'

import Header from './header'
import Footer from './footer'
import FirstSection from './first-section'

const DocsPage = () => (
  <Fragment>
    <Header />
    <FirstSection title={'Docs Page'} description={'Let\'s understand how this project works'}/>
    <section className={`home-page-wrapper is-1-column`}>
      <h1 className="home-page-heading">Overview</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque dolorem tempore reiciendis consequuntur iste soluta, quia rerum facilis ipsum? Dolor dolorem ut cumque reiciendis repellendus doloribus in voluptas accusamus!</p>
    </section>
    <Footer />
  </Fragment>
)

export default DocsPage
