import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Table, Tr, Th, Td } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CommentTable = ({ comments, lecture_id, article_id, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>author</Th>
          <Th>contents</Th>
          <Th>create_time</Th>
        </tr></thead>
        <tbody>
          {(comments).map( (comment) =>
            <tr key={comment.id}>
              <Td>{comment.author}</Td>
              <Td>{comment.contents}</Td>
              <Td>{comment.create_time}</Td>
            </tr>
          )}
        </tbody>
      </Table>
      {children}
    </Wrapper>
  )

}
CommentTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default CommentTable
