import {
    Container,
    Header,
    HeaderTextTitle,
    HeaderTextSubTitle,
    Body,
    AlignCards,
    BodyTitle,
    Icon
} from "./styles";
import { StatisticCard } from "@components/StatisticCard";

import { TouchableOpacity } from "react-native";

export function Statistics() {
    return (
        <Container>
            <Header type="POSITIVE">
                <TouchableOpacity style={{ alignSelf: "flex-start" }}>
                    <Icon type="POSITIVE" />
                </TouchableOpacity>
                <HeaderTextTitle>30.21%</HeaderTextTitle>
                <HeaderTextSubTitle>dsa refeições dentro da dieta</HeaderTextSubTitle>
            </Header>
            <Body>
                <BodyTitle>Estatísticas gerais</BodyTitle>
                <StatisticCard
                    title="4"
                    subtitle="melhor sequência de pratos dentro da dieta"
                    width="100"
                />
                <StatisticCard
                    title="109"
                    subtitle="refeições registradas"
                    width="100"
                />
                <AlignCards>
                    <StatisticCard
                        title="32"
                        subtitle="refeições dentro da dieta"
                        width="50"
                        color="GREEN"
                    />
                    <StatisticCard
                        title="77"
                        subtitle="refeições fora da dieta"
                        width="50"
                        color="RED"
                    />
                </AlignCards>
            </Body>
        </Container>
    )
}