import { Container, Title, ActionButtonTypeProps } from "./styles";

type Props = {
    ActionButtonTextProps: string;
    type?: ActionButtonTypeProps;
}

export function ActionButton({ActionButtonTextProps, type = 'DARK'}: Props) {
    return (
        <Container type={type}>
            <Title type={type}>
                { ActionButtonTextProps }
            </Title>
        </Container>
    )
}