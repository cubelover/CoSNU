import React from 'react'
import { connect } from 'react-redux'
import { ReportPage } from 'components'
import { post_report, get_article } from '../store/cosnu/actions'


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
        action_post_report: (lecture_id, article_id, title, contents, cur_page) => {
            dispatch(post_report(lecture_id, article_id, title, contents, cur_page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<ReportPage {...props} />))
