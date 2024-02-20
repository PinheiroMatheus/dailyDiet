import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
`;

export const SubTitle = styled.Text`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GREY_1};
`;

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    padding: 16px 24px;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};

    background-color: ${theme.COLORS.GREY_2};
`;