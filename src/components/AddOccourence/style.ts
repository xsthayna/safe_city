import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const Container = styled.View`
    position: absolute;
    background-color: rgb(0,0,0,0,5);
    width: 100%;
    height: 100%;
`;

export const Content = styled.View`
    height: 55%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.darkNeutral};
    text-align: center;
`;
