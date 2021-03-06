import React from 'react'
import { shallow } from 'enzyme'
import LectureList from '.'

const wrap = (props = {}) => shallow(<LectureList {...props} lectures={[]}/>)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

