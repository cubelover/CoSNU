import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Input = styled.input`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Input.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Input.defaultProps = {
  palette: 'grayscale',
}

export default Input
