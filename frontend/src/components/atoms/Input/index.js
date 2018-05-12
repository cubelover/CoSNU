import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const styles = css`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const InputBase = styled.input`${styles}`

const Input = ({ children, type, ...props }) => {
  if (type == "radio") {
    if(children != undefined) {
      return (
        <Wrapper>
          <span>{ children }</span>
          <InputBase {...props} type={type}></InputBase>
        </Wrapper>
      )
    }
    return <InputBase {...props} type={type} />
  }
  return <InputBase {...props} type={type} />
}


Input.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Input.defaultProps = {
  palette: 'grayscale',
}

export default Input
