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
    this.props.get_articles(this.props.lecture_id)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.lecture_id == this.props.lecture_id) return;
    this.props.get_articles(this.props.lecture_id)
  }
  render(){
    var {lecture_id, cur_page, children, articles, ...props} = this.props
    return (
      <Wrapper {...props}>
        <h3>Article List (Lecture_id = {lecture_id})</h3>
        Sorted by Time<Input type="radio" name="sortedby" />
        Sorted by Upvote<Input type="radio" name="sortedby" />
        <ArticleTable articles={articles} lecture_id={lecture_id} page={cur_page}/>
        <Link to={{pathname : '/lecture/' + lecture_id + '/list/'}}><Button>List</Button></Link>
        <Link to={{pathname : '/lecture/' + lecture_id + '/write/'}}><Button>Write</Button></Link>
        {children}
      </Wrapper>
    )
  }
}

ArticleList.propTypes = {
  reverse: PropTypes.bool,
}

export default ArticleList
