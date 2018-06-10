import React from 'react'
import { shallow } from 'enzyme'
import EditProfilePage from '.'

it('renders', () => {
  shallow(<EditProfilePage location={{query:{}}} user_state={{
    pk: 0, username: "", email: "", token: "", lectures: [], 
}}/>)
})
