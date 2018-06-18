import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'
import { TimeStamp } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleTable = ({articles, lecture_id, page, children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>id</Th>
          <Th>title</Th>
          <Th>comments</Th>
          <Th>author</Th>
          <Th>create_time</Th>
          <Th>upvotes</Th>
          <Th>downvotes</Th>
        </tr></thead>
        <tbody>
          {articles.map( (article) =>
            <tr key={article.id}>
              <Td>{article.id}</Td>
              <Td><StyledLink to={{ pathname: '/lecture/' + lecture_id + '/article/' + article.id, query: { page: page } }}>{article.title}</StyledLink></Td>
              <Td>{article.comments}</Td>
              <Td>{article.author}</Td>
              <Td><TimeStamp timestamp={article.create_time}/></Td>
              <Td>{article.upvotes}</Td>
              <Td>{article.downvotes}</Td>
            </tr>
          )}
        </tbody>
      </Table>
      {children}
    </Wrapper>
    )
  return (
    <Wrapper>
      <Link to={{ pathname: '/lecture/' + lecture_id + '/article/' + article.id, query: { page: page } }}>{article.title}</Link>
      <span>{article.author}</span>
      <span>{article.create_time}</span>
      {children}
    </Wrapper>
  )
}

ArticleTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArticleTable
