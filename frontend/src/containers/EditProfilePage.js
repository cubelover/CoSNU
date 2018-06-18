import React from 'react'
import { connect } from 'react-redux'
import { EditProfilePage } from 'components'
import { set_password, set_lectureinfo, search_lecture } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
    return {
        user_state: state.cosnu.user_state, 
        search_state: state.cosnu.search_state
//        search_state: state.consu.search_state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action_set_password: (password, new_password) => {
            dispatch(set_password(password, new_password))
        },
        action_set_lectureinfo: () => {
            dispatch(set_lectureinfo()) 
        },
        action_search_lecture: (search, page) => {
            dispatch(search_lecture(search, page)) 
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<EditProfilePage {...props} />))
