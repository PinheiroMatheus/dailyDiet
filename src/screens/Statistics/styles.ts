import styled from "styled-components/native";

import theme from "@theme/index";

import { ArrowLeft } from "phosphor-react-native"

type Props = {
    type: 'POSITIVE' | 'NEGATIVE';
}

export const Container = styled.View`
  flex: 1;

  background-color: ${theme.COLORS.WHITE};
`;

export const Header = styled.View<Props>`
    max-height: 200px;
    flex: 1;
    padding: 0 24px;

    justify-content: center;
    align-items: center;

    background-color: ${({type}) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGTH : theme.COLORS.RED_LIGTH};
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ type }) => ({
    color: type == 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))`
    align-self: start;
`;

export const HeaderTextTitle = styled.Text`
    color: ${theme.COLORS.GREY_1};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const HeaderTextSubTitle = styled.Text`
    color: ${theme.COLORS.GREY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const Body = styled.View`
    flex: 1;
    gap: 10px;
    padding: 0 24px;
    margin-top: -23px;
    border-radius: 20px 20px 0 0;

    align-items: center;

    background-color: ${theme.COLORS.WHITE};
`;

export const BodyTitle = styled.Text`
    margin: 33px 0 13px 0;

    color: ${theme.COLORS.GREY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const AlignCards = styled.View`
    flex-direction: row;
    gap: 10px;
`;