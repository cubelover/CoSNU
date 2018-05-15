import React from 'react'
import { connect } from 'react-redux'
import { LectureList } from 'components'
import { user_login, user_logout } from '../store/cosnu/actions'


const mapStateToProps = (state) => ({lectures : state.cosnu.user_state.lectures})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<LectureList {...props} />))
