import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

import { Article, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleList = ( {lecture_id, cur_page} ) => {
  var articles = [];
  var current_url = "/lecture/" + lecture_id + '/list';
  console.log(current_url);
  for(var i=0; i<166; i++) articles.push({title: "Article " + i, id: i+1, author: "Author " + i, create_time:"2018-05-12T07:42:25.105055Z"});
  var article_per_page = 10, max_page_num = Math.floor((articles.length + article_per_page - 1) / article_per_page);
  cur_page = Math.min(cur_page, max_page_num);
  var article_begin = Math.min(article_per_page * (cur_page-1), articles.length-1);
  var article_end = Math.min(article_per_page * (cur_page), articles.length);
  console.log(article_begin, article_end);
  return (
    <Wrapper>
      <h3>Article List (Lecture_id = {lecture_id})</h3>
      <Input type="radio">Sorted by Time</Input>
      <Input type="radio">Sorted by Upvote</Input>
      {articles.slice(article_begin, article_end).map( (article) =>
        <Article article={article} lecture_id={lecture_id} page={cur_page} key={article.id}/>
      )}
      <Button>List</Button>
      {Array.from(new Array(max_page_num), (val,index)=>index+1).map( (page) => {
        if(page == cur_page) {
          return <Link to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} style={{color: 'red', padding: '5'}} key={page}>{page}</Link>
        }
        return <Link to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} style={{padding: '5'}} key={page}>{page}</Link>
      }
      )}
      <Button>Write</Button>
    </Wrapper>
  )
}

ArticleList.propTypes = {
  reverse: PropTypes.bool,
}

export default ArticleList
