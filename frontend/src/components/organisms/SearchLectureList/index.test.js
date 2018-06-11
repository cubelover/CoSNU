import React from 'react'
import { shallow } from 'enzyme'
import SearchLectureList from '.'

const wrap = (props = {}) => shallow(<SearchLectureList {...props} lectures={[]}/>)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

