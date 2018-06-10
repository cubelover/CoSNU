import React from 'react'
import { shallow } from 'enzyme'
import LecturePage from '.'

it('renders', () => {
  shallow(<LecturePage params={{lecture_id: "1", article_id: "1"}} location={{query:{}}} />)
})
