import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import theme from "@theme/index";

export type sectionListCardStatusProps = 'POSITIVE'| 'NEGATIVE';
type Props = {
    type: sectionListCardStatusProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    padding: 14px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GREY_5};
    border-radius: 6px;
`;

export const Hour = styled.Text`
    color: ${theme.COLORS.GREY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Title = styled.Text`
    width: 70%;

    color: ${theme.COLORS.GREY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const DotIndicator = styled.View<Props>`
    background-color: ${({type}) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    width: 14px;
    height: 14px;
    border-radius: 50%
`;
