import styled from 'styled-components'
import Button from './button';

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    & label {
      color: green;
    }
    background-color: coral;
  }
`
export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`
