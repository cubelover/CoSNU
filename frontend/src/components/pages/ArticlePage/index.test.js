import React from 'react'
import { shallow } from 'enzyme'
import ArticlePage from '.'

it('renders', () => {
  shallow(<ArticlePage params={{"lecture_id": "1", "article_id": "1"}} article={{
    id: 0,
    title: "",
    author: "",
    create_time: "",
    contents: ""
}}/>)
})
