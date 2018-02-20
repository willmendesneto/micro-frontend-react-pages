import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Footer from '../../src/js/components/footer'

describe('footer.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <Footer />
    )
  })

  it('should renders the component', () => {
    expect(wrapper.text()).to.eql('Built with ❤ by @willmendesneto')
  })
})
