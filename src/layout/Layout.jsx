import { useState } from 'react';
import { Outlet } from 'react-router';

import * as Styled from './Layout.style';
import { ImUser, ImHeart, ImBubbles3 } from 'react-icons/im'
export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const getIcon = (icone) => {
    switch(icone) {
      case 'user': return <ImUser/>;
      case 'heart': return <ImHeart/>;
      default: return <ImBubbles3/>;
    }
  }

  return(
    <Styled.App>
      {/* NavSidebarComponent */}
      <Styled.Sidebar $open={menuOpen}>
        a 

        <button onClick={() => {setMenuOpen(!menuOpen)}}>
          { menuOpen ? '<' : '>' }
        </button>
      </Styled.Sidebar>

      <Styled.Main>
          {/* HeaderComponent */}
          <Styled.Header>e</Styled.Header>

          {/* Componente de pagina */}
          <Styled.Content>
            <Outlet />
          </Styled.Content>

        {/* FooterComponent*/}
        <Styled.Footer>m</Styled.Footer>
      </Styled.Main>
    </Styled.App>
  );
}
