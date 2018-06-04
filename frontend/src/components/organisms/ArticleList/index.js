import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

import { ArticleTable, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArticleList extends React.Component {
  constructor( props ){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.params)
    this.props.get_articles(this.props.lecture_id, this.props.cur_page)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.cur_page == this.props.cur_page && nextProps.lecture_id == this.props.lecture_id) return;
    this.props.get_articles(nextProps.lecture_id, nextProps.cur_page)
  }
  render(){
    var {lecture_id, cur_page, children, articles, location, ...props} = this.props
    console.log(articles);
    console.log(location);
    return (
      <Wrapper {...props}>
        <h3>Article List (Lecture_id = {lecture_id})</h3>
        Sorted by Time (Todo)<Input type="radio" name="sortedby" />
        Sorted by Upvote (Todo)<Input type="radio" name="sortedby" />
        <Link to={{pathname : '/lecture/' + lecture_id + '/list/'}}><Button>List</Button></Link>
        <Link to={{pathname : '/lecture/' + lecture_id + '/write/'}}><Button>Write</Button></Link>
        <ArticleTable articles={articles.results} lecture_id={lecture_id} page={cur_page}/>
        <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page-1}}}><Button>Prev</Button></Link>
        <Link to={{pathname : '/lecture/' + lecture_id + '/list/', query: {page: cur_page+1}}}><Button>Next</Button></Link>
        {children}
      </Wrapper>
    )
  }
}

ArticleList.propTypes = {
  reverse: PropTypes.bool,
}

export default ArticleList
