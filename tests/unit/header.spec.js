import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from '../../src/js/components/header'

describe('header.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <Header />
    )
  })

  it('should renders the component', () => {
    expect(wrapper.find('.home-page-menu-item').length).to.eql(3)
  })
})
