import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import * as Styled from './Input.style';

export const InputComponent = ({label, type, id, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return(
    <Styled.InputGroup>
      <Styled.Label htmlFor={ id }>{ label }</Styled.Label>

      { type !== 'textarea' &&
        <Styled.InputContainer>
          <Styled.Input type={ showPassword ? 'text' : type } id={ id } placeholder={ placeholder }/>
          { type === 'password' && 
            <Styled.Icon type='button' onClick={handleShowPassword}>
              { !showPassword 
                  ? <MdVisibility/>
                  : <MdVisibilityOff/>
              }
            </Styled.Icon>
          }
        </Styled.InputContainer>
      }

      { type === 'textarea' &&
        <Styled.TextArea id={ id } placeholder={ placeholder }/>
      }
    </Styled.InputGroup>
  )
}

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}