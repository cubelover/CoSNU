import React from 'react'
import { shallow } from 'enzyme'
import LectureList from '.'

const wrap = (props = {}) => shallow(<LectureList {...props} user_state={{username:"kajebiii"}}/>)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

