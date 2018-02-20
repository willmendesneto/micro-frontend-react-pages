import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import '../../scss/first-section.scss'

const FirstSection = ({ title, description }) => (
  <section className={'first-section'}>
    <div className="first-section-wrapper">
      <h1 className={'first-section-title'}>
      {title}
      </h1>
      <p className={'first-section-description'}>{description}</p>
    </div>
  </section>
)

FirstSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

FirstSection.defaultProps = {
  title: 'Here goes the title',
  description: 'Here goes the description',
}
export default FirstSection
