import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const LectureTable = ({lectures, children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>강의명</Th>
          <Th>강의코드</Th>
          <Th>교수</Th>
          <Th>학기</Th>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.id}>
              <Td><StyledLink to={'/lecture/' + lecture.id + '/list'}>{lecture.name}</StyledLink></Td>
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

LectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default LectureTable
