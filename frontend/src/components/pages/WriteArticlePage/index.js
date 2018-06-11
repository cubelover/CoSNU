import React from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from 'components'
import { Input, Button, Textarea } from 'components'
import { Link } from 'react-router'

const WriteArticlePage = ({user_lectures, params, action_post_article, children, ...props}) => {
  let title, contents;
  var lecture_id = params.lecture_id
  const post_article = () => {
    action_post_article(lecture_id, title.value, contents.value);
  }
  
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
  }else{
    return (
      <PageTemplate>
        <h1>{lecture_name}</h1>
        <div>
          <div style={{'padding': '8px', 'text-align': 'center'}}>
            <Input type="text" placeholder="제목" innerRef={(ref) => {title = ref;}} style={{'width': '560px'}}></Input>
            &nbsp;
            <Link to={{ pathname: '/lecture/' + params.lecture_id + '/list/'}}><Button onClick={post_article}>글쓰기</Button></Link>
            &nbsp;
            <Link to={{ pathname: '/lecture/' + params.lecture_id + '/list/'}}><Button>취소</Button></Link>
          </div>
          <div style={{'padding': '8px', 'text-align': 'center'}}>
            <Textarea type="contents" placeholder="내용" innerRef={(ref) => {contents = ref;}}></Textarea>
          </div>
        </div>
        {children}
      </PageTemplate>
    )
  }
}

export default WriteArticlePage

