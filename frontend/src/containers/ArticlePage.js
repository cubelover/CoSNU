import React from 'react'
import { connect } from 'react-redux'
import { ArticlePage } from 'components'
import { get_article, delete_article } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
    return ({article : state.cosnu.user_state.current_article})
}
const mapDispatchToProps = (dispatch) => {
    return {
        get_article: (lecture_id, article_id) => {
            dispatch(get_article(lecture_id, article_id))
        },
        action_delete_article: (lecture_id, article_id) => {
            dispatch(delete_article(lecture_id, article_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<ArticlePage {...props} />))
