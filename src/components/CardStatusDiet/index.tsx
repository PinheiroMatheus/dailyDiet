import { Container, Title, SubTitle, StatusTypeStyleProps } from "./styles";

type Props = {
    value: number;
    type: StatusTypeStyleProps;
}

export function CardStatusDiet({ type, value }: Props) {
    return (
        <Container type={type}>
            <Title> {value}% </Title>
            <SubTitle> das refeições dentro da dieta </SubTitle>
        </Container>
    )
}