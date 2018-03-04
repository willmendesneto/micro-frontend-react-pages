import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import CheckoutPage from '../../src/js/components/checkout-page'

describe('checkout-page.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <CheckoutPage />
    )
  })

  it('should renders a checkout message', () => {
    expect(wrapper.find('.home-page-heading').text()).to.contain('You made it! We will contact you soon!')
  })
})
