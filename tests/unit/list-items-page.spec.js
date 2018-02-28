import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ListItemsPage from '../../src/js/components/list-items-page'

describe('list-items-page.js', () => {
  let wrapper

  before(() => {

    const defaultItems = [
      { image: 'https://loremflickr.com/250/200/cat', title: 'title 1', description: 'description 1' },
      { image: 'https://loremflickr.com/250/200/nature', title: 'title 2', description: 'description 2' },
      { image: 'https://loremflickr.com/250/200/house', title: 'title 3', description: 'description 3' },
    ]
    wrapper = shallow(
      <ListItemsPage items={defaultItems} categoryName={'Category'}/>
    )
  })

  it('should renders the first section page title', () => {
    expect(wrapper.find('FirstSection').props().title).to.eql('Products Page')
  })

  it('should renders the first section page description', () => {
    expect(wrapper.find('FirstSection').props().description).to.eql('What do you want to check it out?')
  })

  it('should renders the docs section title', () => {
    expect(wrapper.find('.home-page-heading').text()).to.eql('Category')
  })

  it('should renders the product items', () => {
    expect(wrapper.find('.product-list-item').length).to.eql(3)
  })

  it('should renders default message if there are no items for that category', () => {
    const node = shallow(
      <ListItemsPage categoryName={'Category'} />
    )
    expect(node.find('.product-list-item').length).to.eql(0)
    expect(node.find('.home-page-wrapper').text()).to.contain('No items for this category :(')
  })
  it('should renders the docs footer', () => {
    expect(wrapper.find('Footer').length).to.eql(1)
  })
})
