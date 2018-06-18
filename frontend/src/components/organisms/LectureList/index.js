import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { LectureTable } from 'components'
import { Page, CurrPage, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const LectureList = ({lectures, children, ...props}) => {
  return (
    <Wrapper {...props}>
      <h3>강의목록</h3>
      <LectureTable lectures={lectures.results}></LectureTable>
      {children}
    </Wrapper>
  )
}

LectureList.propTypes = {
  reverse: PropTypes.bool,
}

export default LectureList
