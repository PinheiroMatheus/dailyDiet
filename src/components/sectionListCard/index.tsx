import { Text } from "react-native";
import { Container, Hour, Title, DotIndicator, sectionListCardStatusProps } from "./styles";
import theme from "@theme/index";

type Props = {
    hour: string;
    title: string;
    type: sectionListCardStatusProps;
}

export function SectionListCard({ hour, title, type }: Props) {
    return (
        <Container>
            <Hour>
                {hour}
            </Hour>
            <Text style={{color: theme.COLORS.GREY_4}}>|</Text>
            <Title numberOfLines={1}>
                {title}
            </Title>
            <DotIndicator type={type}/>
        </Container>
    )
}