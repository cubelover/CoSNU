import React from 'react'

import { PageTemplate, ArticleList } from 'components'
import { Button } from 'components'

/*
{
  "id": 1,
  "title": "뻘글",
  "author": "소개수강생1",
  "create_time": "2018-05-12T07:42:25.105055Z",
  "contents": "뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글"
}
*/
const ArticlePage = ({ params, location: { query }}) => {
  var article = 
  {
    "id": 1,
    "title": "뻘글",
    "author": "소개수강생1",
    "create_time": "2018-05-12T07:42:25.105055Z",
    "contents": "뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글"
  };

  let lecture_id = params.lecture_id;
  let article_id = params.article_id;
  let cur_page = query && query.page ? parseInt(query.page, 10) : 1;
  if(isNaN(cur_page)) cur_page = 1;
  return (
    <PageTemplate>
      <h1>ArticlePage {lecture_id} + {article_id}</h1>
      <span>{article.title}</span>
      <span>{article.author}</span>
      <span>{article.create_time}</span>
      <p>{article.contents}</p>
      <Button>Modify</Button>
      <Button>Delete</Button>
      <input type="text"/>
      <Button>Report</Button>
      <input type="text"/>
      <Button>Add Comment</Button>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
    </PageTemplate>
  )
}

export default ArticlePage