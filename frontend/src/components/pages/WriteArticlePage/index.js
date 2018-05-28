import React from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from 'components'
import { Input, Button, Textarea } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
`

const WriteArticlePage = ({params, action_post_article, children, ...props}) => {
  let title, contents;
  console.log(params)
  const post_article = () => {
    console.log('send_article')
    console.log(title.value)
    console.log(contents.value)
    action_post_article(params.lecture_id, title.value, contents.value);
  }
  return (
    <PageTemplate>
      <h1>WriteArticlePage</h1>
      <Wrapper>
        <Input type="text" placeholder="title" innerRef={(ref) => {title = ref;}}></Input>
        <Button onClick={post_article}>POST</Button>
      </Wrapper>
      <Textarea type="contents" placeholder="contents" innerRef={(ref) => {contents = ref;}}></Textarea>
      {children}
    </PageTemplate>
  )
}

export default WriteArticlePage

