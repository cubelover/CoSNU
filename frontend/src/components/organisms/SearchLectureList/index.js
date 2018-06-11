import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { SearchLectureTable } from 'components'
import { LectureTable } from 'components'
import { Page, CurrPage, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SearchLectureList = ({lectures, location, cur_page, children, ...props}) => {
  var article_per_page = 10, max_page_num = Math.floor((lectures.count + article_per_page - 1) / article_per_page)
  var show_page_number = 10, page_base = Math.floor((Math.max(1, cur_page) - 1) / show_page_number) * show_page_number + 1;
  if(max_page_num < 1) max_page_num = 1;

  return (
    <Wrapper {...props}>
      <SearchLectureTable lectures={lectures.results}></SearchLectureTable>
      <div style={{'text-align': 'center'}}>
        <Page to={{pathname : location.pathname, query: {page: 1}}}>&lt;&lt;</Page>        
        {cur_page > 1 && <Page to={{pathname : location.pathname, query: {page: cur_page-1}}}>&lt;</Page>}
        {Array.from(new Array(show_page_number), (val,index)=>page_base+index).map( (page) => {
          if(page == cur_page) {
            return <CurrPage to={{ pathname: location.pathname, query: { page: page } }} key={page}>{page}</CurrPage>
          }else if(page <= max_page_num) {
            return <Page to={{ pathname: location.pathname, query: { page: page } }} key={page}>{page}</Page>
          }
        }
        )}
        {cur_page < max_page_num && <Page to={{pathname : location.pathname, query: {page: cur_page+1}}}>&gt;</Page>}
        <Page to={{pathname : location.pathname, query: {page: max_page_num}}}>&gt;&gt;</Page>
      </div>
      {children}
    </Wrapper>
  )
}

SearchLectureList.propTypes = {
  reverse: PropTypes.bool,
}

export default SearchLectureList
