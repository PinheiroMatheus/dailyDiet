import styled from "styled-components/native";
import { PencilSimpleLine, Trash, Plus } from "phosphor-react-native"

import theme from "@theme/index";

import { TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export type ActionButtonTypeProps = 'LIGHT'| 'DARK';
type Props = {
    type: ActionButtonTypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    flex-direction: row;
    gap: 12px;

    justify-content: center;
    align-items: center;
    
    background-color: ${({ type }) => type === 'DARK' ? theme.COLORS.GREY_2 : theme.COLORS.WHITE};
    border: solid 1px ${ theme.COLORS.GREY_2 };
`;

export const Title = styled.Text<Props>`
    color: ${({ type }) => type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GREY_1};
    font-size: ${ theme.FONT_SIZE.MD }px;
    font-family: ${ theme.FONT_FAMILY.BOLD };
`;

export const PencilIcon = styled(PencilSimpleLine).attrs<Props>(({ type }) => ({
    color: type !== 'DARK' ? theme.COLORS.GREY_2 : theme.COLORS.WHITE,
    size: 18,
}))``;

export const PlusIcon = styled(Plus).attrs<Props>(({ type }) => ({
    color: type !== 'DARK' ? theme.COLORS.GREY_2 : theme.COLORS.WHITE,
    size: 18,
}))``;

export const TrashIcon = styled(Trash).attrs<Props>(({ type }) => ({
    color: type !== 'DARK' ? theme.COLORS.GREY_2 : theme.COLORS.WHITE,
    size: 18,
}))``;