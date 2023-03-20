import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Content = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

export const Img = styled.Image`
    height: 200px;
    width: 200px;
    margin: 20px 0;
`;

export const Title = styled.Text`
    color: ${Colors.primary};
    font-weight: bold;
    font-size: 24px;
`;

export const Description = styled.Text`
    color: ${Colors.darkNeutral};
    font-size: 18px;
    text-align: center;
    margin: 10px 0 20px 0;
`;