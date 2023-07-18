import styled from 'styled-components'

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #efefef;
`;

export const Sidebar = styled.div`
  width: ${({$open}) => $open ? '20%' : '10%'};
  height: 100%;
  background-color: aquamarine;
`;

export const Main = styled.main`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const Header = styled.header`
  height: 50px;
  background-color: black;
  color: #FFF;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
`

export const Footer = styled.footer`
  height: 50px;
  background-color: grey;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;