import React from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from 'components'
import { Input, Button, Textarea } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
`

const WriteArticlePage = ({params, action_post_article, children, ...props}) => {
  let title, contents;
  const post_article = () => {
    action_post_article(params.lecture_id, title.value, contents.value);
  }
  return (
    <PageTemplate>
      <h1>WriteArticlePage</h1>
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

export default WriteArticlePage

