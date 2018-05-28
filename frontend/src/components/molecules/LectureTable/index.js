import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

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
      <table>
        <thead><tr>
          <td>name</td>
          <td>code</td>
          <td>professor</td>
          <td>semester</td>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.lecture.id}>
              <td><Link to={'/lecture/' + lecture.lecture.id + '/list'}>{lecture.lecture.name}</Link></td>
              <td>{lecture.lecture.code}</td>
              <td>{lecture.lecture.professor}</td>
              <td>{lecture.lecture.semester}</td>
            </tr>
          )}
        </tbody>
      </table>
      {children}
    </Wrapper>
  )
}

LectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default LectureTable
