import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Lecture } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const LectureList = () => {
  var lectureNames = ["Lecture 1", "Lecture 2", "Lecture 3", ]
  return (
    <Wrapper>
      <h3>Lecture List</h3>
      {lectureNames.map( (name) =>
        <Lecture name={name} key={name}></Lecture>
      )}
    </Wrapper>
  )
}

LectureList.propTypes = {
  reverse: PropTypes.bool,
}

export default LectureList
