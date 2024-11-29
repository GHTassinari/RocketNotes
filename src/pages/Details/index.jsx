import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete Note" />

          <h1>Introduction to React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            architecto, quo animi enim pariatur, obcaecati ab deserunt quod
            fugit rerum quae commodi laborum ducimus et aut? Tempore temporibus
            repudiandae eaque!
          </p>

          <Section title="Useful links">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Bookmarks">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
    </Container>
  );
}
