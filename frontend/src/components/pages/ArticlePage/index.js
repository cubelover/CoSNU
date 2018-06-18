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
    var {user_lectures} = this.props
    var {action_delete_article, action_post_comment, action_post_upvote, action_post_downvote} = this.props
    var {lecture_id, article_id} = this.props.params;
    var {location, children, article, ...props} = this.props
    let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
    if(isNaN(cur_page)) cur_page = 1;
    var lecture_name = "none_lecture_id", lecture_alias = "none_lecture_id"
    for(var i=0; i<user_lectures.length; i++) {
      if((user_lectures[i].lecture.id).toString() == lecture_id) {
        lecture_name = user_lectures[i].lecture.name
        lecture_alias = user_lectures[i].alias
        break;
      }
    }
    if(lecture_name == "none_lecture_id") {
      return (
        <PageTemplate>
          <h1>Invalid</h1>
          <Link to="/"><Button>Home</Button></Link>
          {children}
        </PageTemplate>
      )
    }
    const delete_article = () => {
      action_delete_article(lecture_id, article_id)
    }

    let input_comment
    const post_comment = () => {
      action_post_comment(lecture_id, article_id, input_comment.value)
      input_comment.value = ''
    }
    const post_upvote = () => {
      action_post_upvote(lecture_id, article_id, cur_page)
    }
    const post_downvote = () => {
      action_post_downvote(lecture_id, article_id, cur_page)
    }
    return (
      <PageTemplate>
        <h1>{lecture_alias}({lecture_name})</h1>
        <div style={{'width': '960px', 'border': '1px solid #ccc'}}>
          <div style={{'background-color': '#eee', 'padding': '4px 8px 4px 16px'}}>
            <div style={{'float': 'right', 'text-align': 'right', 'padding': '2px'}}>
              <div style={{'padding': '2px'}}>{article.author}</div>
              <div style={{'padding': '2px'}}>{article.create_time}</div>
              <div style={{'padding': '2px'}}>추천 {article.upvotes} 비추천 {article.downvotes}</div>
            </div> 
            <div><h2>{article.title}</h2></div>
          </div>
          <div style={{'padding': '8px 16px'}}>{article.contents}</div>
        </div>
        <div style={{'width': '960px'}}>
          <div style={{'float': 'left', 'padding': '8px'}}>
            <Button>수정(todo)</Button>
            &nbsp;
            <Link to={{ pathname: '/lecture/' + lecture_id + '/list/' }}><Button onClick = {delete_article}>삭제</Button></Link>
          </div>
          <div style={{'float': 'right', 'padding': '8px'}}>
            <Link to = {{ pathname: '/lecture/' + lecture_id + '/article/' + article_id + '/report/'}}><Button>신고</Button></Link>
          </div>
          <div style={{'width': '160px', 'margin': 'auto', 'text-align': 'center', 'padding': '8px'}}>
            <Button onClick = {post_upvote}>추천</Button>
            &nbsp;
            <Button onClick = {post_downvote}>비추천</Button>
          </div>
        </div>
        <CommentTable comments={(article.comments)} lecture_id={lecture_id} article_id={article_id}/>
        <div style={{'padding': '8px'}}>
          <Input type="text" innerRef={(ref) => {input_comment = ref}} style={{'width': '820px'}}></Input>
          &nbsp;
          <Button onClick = {post_comment}>댓글 작성</Button>
        </div>
        <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
        {children}
      </PageTemplate>
    )
  }
}

export default ArticlePage
