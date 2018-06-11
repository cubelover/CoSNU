import React from 'react'
import { connect } from 'react-redux'
import { SearchLectureTable } from 'components'
import { register_lecture } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
}
const mapDispatchToProps = (dispatch) => {
    return {
        action_register_lecture: (lecture_id, nickname, alias) => {
            dispatch(register_lecture(lecture_id, nickname, alias))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<SearchLectureTable {...props} />))
