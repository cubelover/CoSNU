import React from 'react'
import styled from 'styled-components'

import { AccountInfo } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTemplate = (props) => {
  return (
    <Wrapper>
      <h1>CoSNU</h1>
      <AccountInfo/>
      {props.children}
    </Wrapper>
  )
}

export default PageTemplate
