import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import FirstSection from '../../src/js/components/first-section'

describe('first-section.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <FirstSection title={'my title'} description={'my description'} />
    )
  })

  it('should renders the first section page title', () => {
    expect(wrapper.find('.first-section-title').text()).to.eql('my title')
  })

  it('should renders the first section page description', () => {
    expect(wrapper.find('.first-section-description').text()).to.eql('my description')
  })
  
  it('should renders the default title and description if there are no props', () => {
    
    const node = shallow(
      <FirstSection />
    )
    expect(node.find('.first-section-title').text()).to.eql('Here goes the title')
    expect(node.find('.first-section-description').text()).to.eql('Here goes the description')
  })
})
