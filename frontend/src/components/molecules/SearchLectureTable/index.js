import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SearchLectureTable = ({lectures, children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>name</Th>
          <Th>code</Th>
          <Th>professor</Th>
          <Th>semester</Th>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.id}>
              <Td>{lecture.name}</Td>
              <Td>{lecture.code}</Td>
              <Td>{lecture.professor}</Td>
              <Td>{lecture.semester}</Td>
            </tr>
          )}
        </tbody>
      </Table>
      {children}
    </Wrapper>
  )
}

SearchLectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SearchLectureTable
