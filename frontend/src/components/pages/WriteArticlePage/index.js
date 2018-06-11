import React from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from 'components'
import { Input, Button, Textarea } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
`

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
        <Wrapper>
          <Input type="text" placeholder="title" innerRef={(ref) => {title = ref;}}></Input>
          <Link to={{ pathname: '/lecture/' + params.lecture_id + '/list/'}}><Button onClick={post_article}>POST</Button></Link>
          <Link to={{ pathname: '/lecture/' + params.lecture_id + '/list/'}}><Button>Cancel</Button></Link>
        </Wrapper>
        <Textarea type="contents" placeholder="contents" innerRef={(ref) => {contents = ref;}}></Textarea>
        {children}
      </PageTemplate>
    )
  }
}

export default WriteArticlePage

