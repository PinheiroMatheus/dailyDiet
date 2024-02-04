import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED_DARK};
    font-size: 32;
`;