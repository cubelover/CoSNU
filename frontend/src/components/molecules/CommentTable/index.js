import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CommentTable = ({ comments, lecture_id, article_id, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <table>
        <thead><tr>
          <td>article</td>
          <td>author</td>
          <td>contents</td>
          <td>create_time</td>
        </tr></thead>
        <tbody>
          {(comments).map( (comment) =>
            <tr key={comment.id}>
              <td>{comment.article}</td>
              <td>{comment.author}</td>
              <td>{comment.contents}</td>
              <td>{comment.create_time}</td>
            </tr>
          )}
        </tbody>
      </table>
      {children}
    </Wrapper>
  )

}
CommentTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default CommentTable
