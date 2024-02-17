import {
    Container,
    SubTitle,
    Title,
    StatisticsCardWidth,
    StatisticsCardColor
} from "./styles";

type Props = {
    title: string;
    subtitle: string;
    width: StatisticsCardWidth;
    color?: StatisticsCardColor;
}

export function StatisticCard({ title, subtitle, width, color = 'GREY' }: Props) {
    return (
        <Container
            width={width}
            color={color}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}