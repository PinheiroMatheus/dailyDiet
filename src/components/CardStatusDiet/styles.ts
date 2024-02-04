import styled from "styled-components/native";

import theme from "@theme/index";

export const Container = styled.View`
    width: 100%;
    height: 102px;
    margin-top: 32px;
    padding: 20px 16px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    background-color: ${ theme.COLORS.GREEN_LIGTH };
    color: ${ theme.COLORS.GREY_1 };
`;

export const Title = styled.Text`
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.XXXL }px;
`;

export const SubTitle = styled.Text`
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
`;