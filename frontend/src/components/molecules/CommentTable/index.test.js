import React from 'react'
import { shallow } from 'enzyme'
import CommentTable from '.'

const wrap = (props = {}) => shallow(<CommentTable {...props} />)

it('renders articles when passed in', () => {
  let comment = {
    id: 1, 
    article: "COMMENT_ARTICLE",
    author: "COMMENT_AUTHOR",
    contents: "COMMENT_CONTENTS", 
    create_time: "COMMENT_CREATE_TIME"
  }
  const wrapper = wrap({comments: [comment]})
  expect(wrapper.contains('COMMENT_CONTENTS')).toBe(true)
})
it('renders children when passed in', () => {
  const wrapper = wrap({comments: [], children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({comments: [], id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
