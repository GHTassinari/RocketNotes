import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './styles';

export function Header(){
  const { signOut } = useAuth();
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/GHTassinari.png" alt="Users Photo"></img>

        <div>
          <span>Welcome</span>
          <strong>Guilherme Henrique Tassinari</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}