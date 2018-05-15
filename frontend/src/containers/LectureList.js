import React from 'react'
import { connect } from 'react-redux'
import { LectureList } from 'components'
import { user_login, user_logout } from '../store/cosnu/actions'


const mapStateToProps = (state) => ({user_state: state.cosnu.user_state})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<LectureList {...props} />))
