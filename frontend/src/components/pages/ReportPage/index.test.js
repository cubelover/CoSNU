import React from 'react'
import { shallow } from 'enzyme'
import ReportPage from '.'

it('renders', () => {
  shallow(<ReportPage 
    params={{lecture_id: "1", article_id: "1"}} 
    location={{query:{}}} 
    article={{
      id: 0,
      title: "",
      author: "",
      create_time: "",
      contents: ""
    }}
    user_lectures={[]} 
  />)  
})
