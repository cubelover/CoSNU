import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Td = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Td.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Td.defaultProps = {
  palette: 'grayscale',
}

export default Td
