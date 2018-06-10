import React from 'react'
import { shallow } from 'enzyme'
import WriteArticlePage from '.'

it('renders', () => {
  shallow(<WriteArticlePage params={{"lecture_id": "1"}}/>)
})
