import React from 'react'
import { shallow } from 'enzyme'
import Lecture from '.'

const wrap = (props = {}) => shallow(<Lecture {...props} />)


it('renders lectures when passed in', () => {
  let lectures = [
    {
      code:"LECTURE_CODE",
      credit:3,
      id:1,
      name:"LECTURE_NAME",
      professor:"LECTURE_PROFESSOR",
      semester:"LECTURE_SEMESTER"
    }
  ]
  const wrapper = wrap({lectures: lectures})
  expect(wrapper.contains('LECTURE_NAME')).toBe(true)
  expect(wrapper.contains('LECTURE_SEMESTER')).toBe(true)
  expect(wrapper.contains('LECTURE_PROFESSOR')).toBe(true)
  expect(wrapper.contains('LECTURE_CODE')).toBe(true)
})

it('renders children when passed in', () => {
  const wrapper = wrap({lectures: [], children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({lectures: [], id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
