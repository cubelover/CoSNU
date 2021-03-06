import React from 'react'
import { shallow } from 'enzyme'
import SearchLectureList from '.'

const wrap = (props = {}) => shallow(<SearchLectureList 
  location={{query:{}}} 
  lectures={[]}
  {...props} 
/>)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

