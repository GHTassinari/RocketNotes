import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
            <img src="https://github.com/GHTassinari.png" alt="User photo"></img>

            <label htmlFor="avatar">
                <FiCamera />
                <input
                    id="avatar"
                    type="file"
                />
            </label>
        </Avatar>
        <Input placeholder="Name" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Current Password" type="password" icon={FiLock} />

        <Input placeholder="New Password" type="password" icon={FiLock} />

        <Button title="Save changes" />
      </Form>
    </Container>
  );
}
