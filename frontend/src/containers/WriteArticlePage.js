import React from 'react'
import { connect } from 'react-redux'
import { WriteArticlePage } from 'components'
import { post_article } from '../store/cosnu/actions'


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => {
    return {
        action_post_article: (title, contents) => {
            dispatch(post_article(title, contents))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<WriteArticlePage {...props} />))
