import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './Login.style';
import { InputComponent } from '../Input/Input.component';

export const FormLoginComponent = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const isDisabled = () => {
    return !data.email || !data.password || !data.email.includes('@') || data.password.length < 8;
  }

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;

    setData({...data, [id]: value});
  }

  const redirectToHome = () => {
    navigate('/home')
  }

  return(
    <Styled.Form onSubmit={redirectToHome}>
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
        <Styled.SubTitle>Texto</Styled.SubTitle>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent id='email' type='email' placeholder='Digite seu email' label='E-mail'/>
        <InputComponent id='password' type='password' placeholder='Digite sua senha' label='Senha'/>
      </Styled.InputGroup>

      <Styled.Button type='submit' disabled={isDisabled()}>Entrar</Styled.Button>

      <Styled.Action>
        <Styled.EsqueciSenha>Esqueci minha senha</Styled.EsqueciSenha>
        <Styled.Button $outlined={true} type='button'>Criar conta</Styled.Button>
      </Styled.Action>
    </Styled.Form>
  )
}