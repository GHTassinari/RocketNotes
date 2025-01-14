import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section'

import { Container, Form } from './styles';

export function New(){
    return(
    <Container>
        <Header />

        <main>
            <Form>
                <header>
                    <h1>Create note</h1>
                    <a href="/">Return</a>
                </header>

                <Input placeholder="Title"/>
                <Textarea placeholder="Observations"/>

                <Section title="Useful links"/>
                <NoteItem value="https://rocketseat.com.br"/>
                <NoteItem isnew="true" placeholder="New Link"/>
            </Form>
        </main>
    </Container>
    );
}