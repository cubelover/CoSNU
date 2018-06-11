import React from 'react'
import { connect } from 'react-redux'
import { SignUpPage } from 'components'
import { verify_email, sign_up } from '../store/cosnu/actions'


const mapStateToProps = (state) => ({alert_state: state.cosnu.alert_state})
const mapDispatchToProps = (dispatch) => {
    return {
        action_verify_email: (email) => {
            dispatch(verify_email(email))
        },
        action_sign_up: (username, password, email, verify_code) => {
            dispatch(sign_up(username, password, email, verify_code)) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<SignUpPage {...props} />))
