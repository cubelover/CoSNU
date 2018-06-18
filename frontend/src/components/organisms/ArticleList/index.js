import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

import { Page, CurrPage, ArticleTable, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArticleList extends React.Component {
  constructor( props ){
    super(props)
  }
  componentDidMount(){
    this.props.get_articles(this.props.lecture_id, this.props.cur_page)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.cur_page == this.props.cur_page && nextProps.lecture_id == this.props.lecture_id) return;
    this.props.get_articles(nextProps.lecture_id, nextProps.cur_page)
  }
  render(){
    var {lecture_id, cur_page, children, articles, ...props} = this.props
    
    var article_per_page = 10, max_page_num = Math.floor((articles.count + article_per_page - 1) / article_per_page)
    var show_page_number = 10, page_base = Math.floor((Math.max(1, cur_page) - 1) / show_page_number) * show_page_number + 1;
    //Sorted by Time (Todo)<Input type="radio" name="sortedby" />
    //Sorted by Upvote (Todo)<Input type="radio" name="sortedby" />
    return (
      <Wrapper {...props}>
        <h3>글 목록</h3>
        <Link to={{pathname : '/lecture/' + lecture_id + '/list/'}}><Button>목록</Button></Link>
        <Link to={{pathname : '/lecture/' + lecture_id + '/write/'}}><Button>글쓰기</Button></Link>
        <ArticleTable articles={articles.results} lecture_id={lecture_id} page={cur_page}/>
        <div style={{'text-align': 'center'}}>
          <Page to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: 1}}}>&lt;&lt;</Page>
          {cur_page > 1 && <Page to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page-1}}}>&lt;</Page>}
          {Array.from(new Array(show_page_number), (val,index)=>page_base+index).map( (page) => {
            if(page == cur_page) {
              return <CurrPage to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} key={page}>{page}</CurrPage>
            }else if(page <= max_page_num) {
              return <Page to={{ pathname: "/lecture/" + lecture_id + '/list', query: { page: page } }} key={page}>{page}</Page>
            }
          }
          )}
          {cur_page < max_page_num && <Page to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page+1}}}>&gt;</Page>}
          <Page to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: max_page_num}}}>&gt;&gt;</Page>
        </div>
        {children}
      </Wrapper>
    )
  }
}

ArticleList.propTypes = {
  reverse: PropTypes.bool,
}

export default ArticleList
