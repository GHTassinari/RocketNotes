import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https:/github.com/GHTassinari.png" alt="Foto do usuário"></img>

        <div>
          <span>Bem-vindo</span>
          <strong>Guilherme Henrique Tassinari</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}