import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { LectureTable } from 'components'

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

const LectureList = () => {
  var lectures = [];
  for(var i=0; i<6; i++) lectures.push({name: "Lecture" + i, id: i+1, code: "4190.309A / " + i, professor:"professor" + i, semester:"semester"+i});
  return (
    <Wrapper>
      <h3>Lecture List</h3>
      <LectureTable lectures={lectures}></LectureTable>
    </Wrapper>
  )
}

LectureList.propTypes = {
  reverse: PropTypes.bool,
}

export default LectureList
