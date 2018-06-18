import React from 'react'
import { connect } from 'react-redux'
import { EditLectureTable } from 'components'
import { modify_lecture, delete_lecture } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
    return {
//        search_state: state.consu.search_state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action_modify_lecture: (author_id, lecture_id, nickname, alias) => {
            dispatch(modify_lecture(author_id, lecture_id, nickname, alias))
        },
        action_delete_lecture: (author_id, lecture_id) => {
            dispatch(delete_lecture(author_id, lecture_id)) 
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<EditLectureTable {...props} />))
