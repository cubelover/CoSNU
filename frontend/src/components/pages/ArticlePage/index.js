import React from 'react'

import { PageTemplate } from 'components'
import { Button, Input } from 'components'
import { ArticleList } from 'containers'

/*
{
  "id": 1,
  "title": "뻘글",
  "author": "소개수강생1",
  "create_time": "2018-05-12T07:42:25.105055Z",
  "contents": "뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글"
}
*/
const ArticlePage = ({ params, location, children, ...props}) => {
  //location: {query}
  var article = 
  {
    "id": 1,
    "title": "뻘글",
    "author": "소개수강생1",
    "create_time": "2018-05-12T07:42:25.105055Z",
    "contents": "뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글뻘글"
  };
  if(typeof(params) !== 'undefined' || params != null) {
  }else{
    params = {"lecture_id": "1", "article_id": "1"};
  }

  let lecture_id = params.lecture_id;
  let article_id = params.article_id;
  let cur_page = 1;//query.page ? parseInt(query.page, 10) : 1;
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
      <Input type="text"></Input>
      <Button>Report</Button>
      <Input type="text"></Input>
      <Button>Add Comment</Button>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
      {children}
    </PageTemplate>
  )
}

export default ArticlePage
