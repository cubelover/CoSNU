import React from 'react'
import { connect } from 'react-redux'
import { ArticlePage } from 'components'
import { get_article, delete_article, post_comment, post_upvote, post_downvote } from '../store/cosnu/actions'


const mapStateToProps = (state) => {
    return ({
        user_lectures: state.cosnu.user_state.lectures,
        article: state.cosnu.article_state.current_article
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        get_article: (lecture_id, article_id) => {
            dispatch(get_article(lecture_id, article_id))
        },
        action_delete_article: (lecture_id, article_id) => {
            dispatch(delete_article(lecture_id, article_id))
        },
        action_post_comment: (lecture_id, article_id, comment_content) => {
            dispatch(post_comment(lecture_id, article_id, comment_content))
        },
        action_post_upvote: (lecture_id, article_id, cur_page) => {
            dispatch(post_upvote(lecture_id, article_id, cur_page))
        },
        action_post_downvote: (lecture_id, article_id, cur_page) => {
            dispatch(post_downvote(lecture_id, article_id, cur_page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<ArticlePage {...props} />))
