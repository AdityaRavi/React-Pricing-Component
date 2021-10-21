import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Wrapper = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export {
  Wrapper
}