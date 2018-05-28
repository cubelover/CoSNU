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
class Lecture(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    professor = models.CharField(max_length=20)
    semester = models.CharField(max_length=50)
*/

const LectureTable = ({lectures, children, ...props}) => {
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
            <tr key={lecture.lecture.id}>
              <Td><Link to={'/lecture/' + lecture.lecture.id + '/list'}>{lecture.lecture.name}</Link></Td>
              <Td>{lecture.lecture.code}</Td>
              <Td>{lecture.lecture.professor}</Td>
              <Td>{lecture.lecture.semester}</Td>
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
