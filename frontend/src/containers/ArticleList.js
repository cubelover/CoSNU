import React from 'react'
import { connect } from 'react-redux'
import { ArticleList } from 'components'
import { get_articles } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
    return ({articles : state.cosnu.user_state.current_articles})
}
const mapDispatchToProps = (dispatch) => {
    return {
        get_articles: (lecture_id) => {
            dispatch(get_articles(lecture_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<ArticleList {...props} />))
