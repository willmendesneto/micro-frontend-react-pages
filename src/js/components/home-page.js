import React from 'react';
import { HowToStart } from 'generator-poi-boilerplate-demo'

import '../../scss/styles.scss'

// This component is generated automatically
// As your first step, please remove `HowToStart` component reference

const HomePage = ({ type }) => (
  <section className={`home-page-wrapper is-${type}`}>
    <h1 className="home-page-heading">
      <p>This is your `<code className="home-page-code">home-page</code>` component</p>
    </h1>
    <HowToStart />
  </section>
)

export default HomePage
