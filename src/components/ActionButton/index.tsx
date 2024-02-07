import { Container, Title } from "./styles";

type Props = {
    ActionButtonTextProps: string; 
}

export function ActionButton({ActionButtonTextProps}: Props) {
    return (
        <Container>
            <Title>
                { ActionButtonTextProps }
            </Title>
        </Container>
    )
}