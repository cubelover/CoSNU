import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { LectureTable } from 'components'
import { Link } from 'react-router'
import { Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const LectureList = ({lectures, location, cur_page, children, ...props}) => {
  var article_per_page = 10, max_page_num = Math.floor((lectures.count + article_per_page - 1) / article_per_page)
  var show_page_number = 10, page_base = Math.floor((Math.max(1, cur_page) - 1) / show_page_number) * show_page_number + 1;

  if(cur_page == undefined) {
    return (
      <Wrapper {...props}>
        <h3>Lecture List</h3>
        <LectureTable lectures={lectures.results}></LectureTable>
        {children}
      </Wrapper>
    )        
  }else{
    return (
      <Wrapper {...props}>
        <h3>Lecture List</h3>
        <LectureTable lectures={lectures.results}></LectureTable>
        <Link to={{pathname : location.pathname, query: {page: 1}}}><Button>First Page</Button></Link>
        
        {cur_page > 1 && <Link to={{pathname : location.pathname, query: {page: cur_page-1}}}><Button>Prev</Button></Link>}
        {Array.from(new Array(show_page_number), (val,index)=>page_base+index).map( (page) => {
          if(page == cur_page) {
            return <Link to={{ pathname: location.pathname, query: { page: page } }} style={{color: 'red', padding: '5'}} key={page}>{page}</Link>
          }else if(page <= max_page_num) {
            return <Link to={{ pathname: location.pathname, query: { page: page } }} style={{padding: '5'}} key={page}>{page}</Link>
          }
        }
        )}
        {cur_page < max_page_num && <Link to={{pathname : location.pathname, query: {page: cur_page+1}}}><Button>Next</Button></Link>}
        <Link to={{pathname : location.pathname, query: {page: max_page_num}}}><Button>Last Page</Button></Link>
        
        {children}
      </Wrapper>
    )
  }
  /*
  return (
    <Wrapper {...props}>
      <h3>Article List (Lecture_id = {lecture_id})</h3>
      Sorted by Time (Todo)<Input type="radio" name="sortedby" />
      Sorted by Upvote (Todo)<Input type="radio" name="sortedby" />
      <Link to={{pathname : '/lecture/' + lecture_id + '/list/'}}><Button>List</Button></Link>
      <Link to={{pathname : '/lecture/' + lecture_id + '/write/'}}><Button>Write</Button></Link>
      <ArticleTable lectures={articles.results} lecture_id={lecture_id} page={cur_page}/>
      <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: 1}}}><Button>First Page</Button></Link>
      {cur_page > 1 && <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page-1}}}><Button>Prev</Button></Link>}
      {Array.from(new Array(show_page_number), (val,index)=>page_base+index).map( (page) => {
        if(page == cur_page) {
          return <Link to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} style={{color: 'red', padding: '5'}} key={page}>{page}</Link>
        }else if(page <= max_page_num) {
          return <Link to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} style={{padding: '5'}} key={page}>{page}</Link>
        }
      }
      )}
      {cur_page < max_page_num && <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page+1}}}><Button>Next</Button></Link>}
      <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: max_page_num}}}><Button>Last Page</Button></Link>
      {children}
    </Wrapper>
  )
  */

}

LectureList.propTypes = {
  reverse: PropTypes.bool,
}

export default LectureList
