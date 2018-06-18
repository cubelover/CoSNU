import React from 'react'
import { shallow } from 'enzyme'
import TimeStamp from '.'

const wrap = (props = {}) => shallow(<TimeStamp {...props} timestamp="2018-06-18T14:23:43.299969Z"/>)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})