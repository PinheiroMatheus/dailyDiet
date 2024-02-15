import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const CardList = styled.View`
    width: 100%;
    padding-top: 10px;
`;

export const CardHeaderListText = styled.Text`
    margin-top: 32px;
    color: ${theme.COLORS.GREY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;