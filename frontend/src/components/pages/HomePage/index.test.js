import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '.'

it('renders', () => {
  shallow(<HomePage user_state={{
    pk: 0, username: "", email: "", token: "", lectures: [], 
}}/>)
})
