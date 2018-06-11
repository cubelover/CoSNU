import React from 'react'
import { connect } from 'react-redux'
import { LecturePage } from 'components'


const mapStateToProps = (state) => ({
    user_lectures: state.cosnu.user_state.lectures,
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<LecturePage {...props} />))
