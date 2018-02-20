import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ListItemsPage from '../../src/js/components/list-items-page'

describe('list-items-page.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <ListItemsPage />
    )
  })

  it('should renders the first section page title', () => {
    expect(wrapper.find('FirstSection').props().title).to.eql('Products Page')
  })

  it('should renders the first section page description', () => {
    expect(wrapper.find('FirstSection').props().description).to.eql('What do you want to check it out?')
  })

  it('should renders the docs section title', () => {
    expect(wrapper.find('.home-page-heading').text()).to.eql('Cats')
  })

  it('should renders the product items', () => {
    expect(wrapper.find('.product-list-item').length).to.eql(3)
  })

  it('should renders default message if there are no items for that category', () => {
    const node = shallow(
      <ListItemsPage items={[]} />
    )
    expect(node.find('.product-list-item').length).to.eql(0)
    expect(node.find('.home-page-wrapper').text()).to.contain('No items for this category :(')
  })
  it('should renders the docs footer', () => {
    expect(wrapper.find('Footer').length).to.eql(1)
  })
})
