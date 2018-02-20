import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DocsPage from '../../src/js/components/docs-page'

describe('docs-page.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <DocsPage />
    )
  })

  it('should renders the first section page title', () => {
    expect(wrapper.find('FirstSection').props().title).to.eql('Docs Page')
  })

  it('should renders the first section page description', () => {
    expect(wrapper.find('FirstSection').props().description).to.eql('Let\'s understand how this project works')
  })

  it('should renders the docs section title', () => {
    expect(wrapper.find('.home-page-heading').text()).to.eql('Overview')
  })

  it('should renders the docs footer', () => {
    expect(wrapper.find('Footer').length).to.eql(1)
  })
})
