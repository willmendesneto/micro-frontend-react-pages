import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ListItemPage from '../../src/js/components/list-item-page'

describe('list-item-page.js', () => {
  let wrapper

  before(() => {

    const defaultItem = { image: 'https://loremflickr.com/250/200/cat', title: 'title 1', description: 'description 1' };
    wrapper = shallow(
      <ListItemPage item={defaultItem} categoryName={'Category'}/>
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
    expect(wrapper.find('.product-list-info').length).to.eql(1)
  })

  it('should renders default message if there are no items for that category', () => {
    const node = shallow(
      <ListItemPage categoryName={'Category'} />
    )
    expect(node.find('.product-list-info').length).to.eql(0)
    expect(node.find('.home-page-wrapper').text()).to.contain('Oops! This item is not available :/')
  })

  it('should renders the list item footer', () => {
    expect(wrapper.find('Footer').length).to.eql(1)
  })
})
