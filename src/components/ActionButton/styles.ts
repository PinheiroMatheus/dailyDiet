import styled from "styled-components/native";

import theme from "@theme/index";

import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    margin-top: 40px;
    /* max-height: 29px; */
    padding: 16px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    
    background-color: ${ theme.COLORS.GREY_2 };
`;

export const Title = styled.Text`
    color: ${ theme.COLORS.WHITE };
    font-size: ${ theme.FONT_SIZE.MD }px;
    font-family: ${ theme.FONT_FAMILY.BOLD };
`;