import styled from "styled-components/native";

import theme from "@theme/index";

export type TypeStyleProps = 'POSITIVE' | 'NEGATIVE';
type Props = {
    type: TypeStyleProps;
}

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text<Props>`
    margin-bottom: 8px;

    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const SubTitle = styled.Text`
    text-align: center;

    max-width: 311px;

    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREY_1};
`;

export const Image = styled.Image`
    margin-top: 40px;
    margin-bottom: 32px;

    width: 224px;
    height: 288px;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    padding: 16px 24px;
    
    background-color: ${theme.COLORS.GREY_2};
`;

export const ButtonText = styled.Text`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
`;