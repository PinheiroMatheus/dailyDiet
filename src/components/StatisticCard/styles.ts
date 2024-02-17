import styled from "styled-components/native";

import theme from "@theme/index";

export type StatisticsCardWidth = '100' | '50';
export type StatisticsCardColor = 'GREEN' | 'RED' | 'GREY';
type Props = {
    width: StatisticsCardWidth;
    color: StatisticsCardColor
}

export const Container = styled.View<Props>`
    width: ${({width}) => width === '100' ? '100%' : '48.5%'};
    height: 89px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    background-color: ${({color}) => color === 'GREEN' 
                                    ? theme.COLORS.GREEN_LIGTH
                                    : color === 'RED'
                                    ? theme.COLORS.RED_LIGTH
                                    : color === 'GREY'
                                    ? theme.COLORS.GREY_6
                                    : null};
`;

export const Title = styled.Text`
    color: ${theme.COLORS.GREY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
    color: ${theme.COLORS.GREY_3};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;