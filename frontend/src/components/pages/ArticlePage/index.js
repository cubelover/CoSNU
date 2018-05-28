import React from 'react'
import { Link } from 'react-router'

import { PageTemplate } from 'components'
import { Button, Input } from 'components'
import { ArticleList } from 'containers'
import { CommentTable } from 'components'

class ArticlePage extends React.Component {
  constructor( props ){
    super(props)
  }
  componentDidMount(){
    var {lecture_id, article_id} = this.props.params;
    this.props.get_article(lecture_id, article_id)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.params.lecture_id == this.props.params.lecture_id && 
        nextProps.params.article_id == this.props.params.article_id) return;
    this.props.get_article(nextProps.params.lecture_id, nextProps.params.article_id)
  }
  render(){
    var {location, action_delete_article, action_post_comment, children, article, ...props} = this.props
    var {lecture_id, article_id} = this.props.params;
    let cur_page = 1//query.page ? parseInt(query.page, 10) : 1
    if(isNaN(cur_page)) cur_page = 1

    const delete_article = () => {
      action_delete_article(lecture_id, article_id)
    }

    let input_comment
    const post_comment = () => {
      action_post_comment(lecture_id, article_id, input_comment.value)
      input_comment.value = ''
    }
    return (
      <PageTemplate>
        <h1>ArticlePage {lecture_id} + {article_id}</h1>
        <span>{article.title}</span>
        <span>{article.author}</span>
        <span>{article.create_time}</span>
        <p>{article.contents}</p>
        <Button>Modify</Button>
        <Button onClick = {delete_article}>Delete</Button>
        <Input type="text"></Input>
        <Button>Report</Button>
        <CommentTable comments={(article.comments)} lecture_id={lecture_id} article_id={article_id}/>
        <Input type="text" innerRef={(ref) => {input_comment = ref}}></Input>
        <Button onClick = {post_comment}>Add Comment</Button>
        <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
        {children}
      </PageTemplate>
    )
  }
}
/*
*/
export default ArticlePage
