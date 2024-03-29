import styled from "styled-components/native";

import { TouchableOpacity} from "react-native";
import { ArrowUpRight } from "phosphor-react-native"


import theme from "@theme/index";

export type StatusTypeStyleProps = 'POSITIVE' | 'NEGATIVE'
type Props = {
    type: StatusTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    height: 102px;
    margin-top: 32px;
    margin-bottom: 40px;
    padding: 20px 16px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    background-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGTH : theme.COLORS.RED_LIGTH};
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

export const PencilIcon = styled(ArrowUpRight).attrs<Props>(({ type }) => ({
    color: type == 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))`
    position: absolute;
    align-self: flex-end;
    top: 8px;
    right: 8px;
`;