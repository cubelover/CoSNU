import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Lecture = ({name, ...props}) => {
  return (
    <Wrapper>
      <Link>{name}</Link>
    </Wrapper>
  )
}

Lecture.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Lecture
