import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import '../../scss/header.scss'

const Header = () => (
  <header className={'home-page-header'}>
    <a href="/" className={'header-logo'}>LOGO</a>
    <div className={'home-page-menu'}>
      <div className={'home-page-menu-item'}>
        <a href="/" className={'home-page-menu-item-link'}>Home</a>
      </div>
      <div className={'home-page-menu-item'}>
        <a href="/items" className={'home-page-menu-item-link'}>Items</a>
      </div>
      <div className={'home-page-menu-item'}>
        <a href="/docs" className={'home-page-menu-item-link'}>Docs</a>
      </div>
    </div>
  </header>
)

export default Header
