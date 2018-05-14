import React from 'react'
import styled from 'styled-components'

import { AccountInfo } from 'containers'
import { Link } from 'react-router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTemplate = ( {children, ...props} ) => {
  return (
    <Wrapper>
      <Link to="/"><h1>CoSNU</h1></Link>
      <AccountInfo/>
      {children}
    </Wrapper>
  )
}

export default PageTemplate
