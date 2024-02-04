import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${ theme.COLORS.WHITE };
`;

export const Title = styled.Text`
    color: ${ theme.COLORS.GREEN_DARK };
    font-size: 32px;
`;