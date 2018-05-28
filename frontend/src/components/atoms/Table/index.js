import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Table = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Table.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Table.defaultProps = {
  palette: 'grayscale',
}

export default Table
