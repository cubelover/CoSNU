import React from 'react'
import { Link } from 'react-router'

import { PageTemplate } from 'components'
import { ArticleList } from 'containers'
import { Button, Input, Textarea } from 'components'

class ReportPage extends React.Component {
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
    var {action_post_report} = this.props
    var {lecture_id, article_id} = this.props.params;
    var {location, children, article, ...props} = this.props
    let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
    if(isNaN(cur_page)) cur_page = 1;
    var lecture_name = "none_lecture_name"
    for(var i=0; i<user_lectures.length; i++) {
      if((user_lectures[i].lecture.id).toString() == lecture_id) {
        lecture_name = user_lectures[i].lecture.name
        break;
      }
    }
    if(lecture_name == "none_lecture_name") {
      return (
        <PageTemplate>
          <h1>Invalid</h1>
          <Link to="/"><Button>Home</Button></Link>
          {children}
        </PageTemplate>
      )
    }

    let input_title, input_contents
    const post_report = () => {
      action_post_report(lecture_id, article_id, input_title.value, input_contents.value, cur_page)
    }
    return (
      <PageTemplate>
        <h1>{lecture_name}</h1>
        <div style={{'padding': '8px'}}>
          <div>제&nbsp;&nbsp;목: {article.title}</div>
          <div>작성자: {article.author}</div>
        </div>
        <div>
          <div style={{'text-align': 'center', 'padding': '8px'}}>
            <Input type="text" placeholder="제목" innerRef={(ref) => {input_title = ref}} style={{'width': '640px'}}></Input>
            &nbsp;
            <Link to = {{ pathname: '/lecture/' + lecture_id + '/list/'}}><Button onClick = {post_report}>신고</Button></Link>
          </div>
          <div style={{'text-align': 'center', 'padding': '8px'}}>
            <Textarea placeholder="내용" innerRef={(ref) => {input_contents = ref}}></Textarea>
          </div>
        </div>
        {children}
      </PageTemplate>
    )
  }
}

export default ReportPage
