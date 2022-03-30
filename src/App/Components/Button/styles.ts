import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  background: ${props => props.theme.LIGHT_GREY};
  
  &:hover {
    background: ${props => props.theme.DARK_GREY};
  }
`
