import React from 'react'
import { shallow } from 'enzyme'
import Lecture from '.'

const wrap = (props = {}) => shallow(<Lecture {...props} />)


it('renders lectures when passed in', () => {
  let lecture = {
    alias: "우리원실", 
    lecture: {id: 1, name: "LECTURE_NAME", semester: "LECTURE_SEMESTER", professor: "LECTURE_PROFESSOR", code: "LECTURE_CODE"}, 
    nickname:"소개수강생1", 
    user:1
  }
  const wrapper = wrap({lectures: [lecture]})
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
