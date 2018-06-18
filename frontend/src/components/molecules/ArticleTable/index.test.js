import React from 'react'
import { shallow } from 'enzyme'
import Article from '.'

const wrap = (props = {}) => shallow(<Article {...props} />)

it('renders articles when passed in', () => {
  let article = {
    id: 1, 
    title: "ARTICLE_TITLE", 
    author: "ARTICLE_AUTHOR", 
  }
  const wrapper = wrap({articles: [article]})
  expect(wrapper.contains('ARTICLE_TITLE')).toBe(true)
  expect(wrapper.contains('ARTICLE_AUTHOR')).toBe(true)
})

it('renders children when passed in', () => {
  const wrapper = wrap({articles: [], children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({articles: [], id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
