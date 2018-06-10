import React from 'react'
import { shallow } from 'enzyme'
import ArticleList from '.'

const wrap = (props = {}) => shallow(<ArticleList {...props} articles={{
  count: 0,
  next: null,
  previous: null,
  results: []
}} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
