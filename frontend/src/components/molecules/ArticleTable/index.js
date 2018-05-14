import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

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
      <table>
        <thead><tr>
          <td>id</td>
          <td>title</td>
          <td>author</td>
          <td>create_time</td>
        </tr></thead>
        <tbody>
          {(articles ? articles : []).map( (article) =>
            <tr key={article.id}>
              <td>{article.id}</td>
              <td><Link to={{ pathname: '/lecture/' + lecture_id + '/article/' + article.id, query: { page: page } }}>{article.title}</Link></td>
              <td>{article.author}</td>
              <td>{article.create_time}</td>
            </tr>
          )}
        </tbody>
      </table>
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
