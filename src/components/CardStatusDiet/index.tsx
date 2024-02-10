import { Container, Title, SubTitle, StatusTypeStyleProps, PencilIcon } from "./styles";

type Props = {
    value: number;
    type: StatusTypeStyleProps;
}

export function CardStatusDiet({ type, value }: Props) {
    return (
        <Container type={type}>
            <PencilIcon type={type}/>
            <Title> {value}% </Title>
            <SubTitle> das refeições dentro da dieta </SubTitle>
        </Container>
    )
}