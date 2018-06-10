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
    var {location, action_delete_article, action_post_comment, action_post_upvote, action_post_downvote, children, article, ...props} = this.props
    var {lecture_id, article_id} = this.props.params;
    let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
    if(isNaN(cur_page)) cur_page = 1;
  
    const delete_article = () => {
      action_delete_article(lecture_id, article_id)
    }

    let input_comment
    const post_comment = () => {
      action_post_comment(lecture_id, article_id, input_comment.value)
      input_comment.value = ''
    }
    const post_upvote = () => {
      action_post_upvote(lecture_id, article_id)
    }
    const post_downvote = () => {
      action_post_downvote(lecture_id, article_id)
    }
    return (
      <PageTemplate>
        <h1>ArticlePage {lecture_id} + {article_id}</h1>
        <span>{article.title}</span>
        <span>{article.author}</span>
        <span>{article.create_time}</span>
        <span>{article.upvotes}</span>
        <span>{article.downvotes}</span>
        <p>{article.contents}</p>
        <Button>Modify(todo)</Button>
        <Button onClick = {post_upvote}>Upvote</Button>
        <Button onClick = {post_downvote}>Downvote</Button>
        <Link to={{ pathname: '/lecture/' + lecture_id + '/list/' }}><Button onClick = {delete_article}>Delete</Button></Link>
        <Input type="text"></Input>
        <Button>Report(todo)</Button>
        <CommentTable comments={(article.comments)} lecture_id={lecture_id} article_id={article_id}/>
        <Input type="text" innerRef={(ref) => {input_comment = ref}}></Input>
        <Button onClick = {post_comment}>Add Comment</Button>
        <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
        {children}
      </PageTemplate>
    )
  }
}

export default ArticlePage
