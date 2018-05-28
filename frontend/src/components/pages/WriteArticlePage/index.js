import React from 'react'

import { PageTemplate } from 'components'
import { Input, Button } from 'components'
import { Link } from 'react-router'

const WriteArticlePage = ({action_post_article, children, ...props}) => {
  let title, contents;
  const post_article = () => {
    console.log('send_article')
    action_post_article(title, contents);
  }
  return (
    <PageTemplate>
      <h1>WriteArticlePage</h1>
      <Input type="title" placeholder="title" innerRef={(ref) => {title = ref;}}></Input>
      <Input type="contents" placeholder="contents" innerRef={(ref) => {contents = ref;}}></Input>
      <Button onClick={post_article}>POST</Button> 
      {children}
    </PageTemplate>
  )
}

export default WriteArticlePage

