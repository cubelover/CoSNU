import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Table, Tr, Th, Td } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

/*
class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    contents = models.CharField(max_length=2000)
    create_time = models.DateTimeField(auto_now_add=True)
*/

const ArticleTable = ({articles, lecture_id, page, children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>id</Th>
          <Th>title</Th>
          <Th>author</Th>
          <Th>create_time</Th>
        </tr></thead>
        <tbody>
          {articles.map( (article) =>
            <tr key={article.id}>
              <Td>{article.id}</Td>
              <Td><Link to={{ pathname: '/lecture/' + lecture_id + '/article/' + article.id, query: { page: page } }}>{article.title}</Link></Td>
              <Td>{article.author}</Td>
              <Td>{article.create_time}</Td>
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
