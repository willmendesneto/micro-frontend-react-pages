import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HomePage from '../../src/js/components/home-page'

describe('home-page.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <HomePage>
        <div className="test-container">my HomePage content</div>
      </HomePage>
    )
  })

  it('should renders the component', () => {
    expect(wrapper.length).to.eql(1)
  })
})
