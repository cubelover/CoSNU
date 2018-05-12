import React from 'react'

import { PageTemplate, ArticleList } from 'components'

const ArticlePage = ({ params, location: { query }}) => {
  let lecture_id = params.lecture_id;
  let article_id = params.article_id;
  let cur_page = query && query.page ? parseInt(query.page, 10) : 1;
  if(isNaN(cur_page)) cur_page = 1;
  return (
    <PageTemplate>
      <h1>ArticlePage {lecture_id} + {article_id}</h1>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
    </PageTemplate>
  )
}

export default ArticlePage
