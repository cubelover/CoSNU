import React from 'react'
import { shallow } from 'enzyme'
import SignOut from '.'

const wrap = (props = {}) => shallow(<SignOut {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ username: 'kajebiii' })
  expect(wrapper.contains('kajebiii')).toBe(true)
})

/*
it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
*/