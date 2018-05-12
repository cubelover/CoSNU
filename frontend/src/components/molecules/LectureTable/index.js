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

const LectureTable = ({lectures, ...props}) => {
  return (
    <Wrapper>
      <table>
        <thead><tr>
          <td>name</td>
          <td>code</td>
          <td>professor</td>
          <td>semester</td>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.id}>
              <td><Link to={'/lecture/' + lecture.id + '/list'}>{lecture.name}</Link></td>
              <td>{lecture.code}</td>
              <td>{lecture.professor}</td>
              <td>{lecture.semester}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Wrapper>
  )
}

LectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default LectureTable
