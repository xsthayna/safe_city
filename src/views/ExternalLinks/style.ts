import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const Container = styled.View`
    padding: 40px 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${Colors.darkNeutral};
    font-weight: bold;
`;

export const Cards = styled.View`
    padding: 20px 0;
`;

export const Card = styled.View`
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    border-radius: 4px;
    align-items: center;
    margin: 5px 0%; 
    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    color: ${Colors.darkNeutral};
    font-weight: bold;
`;

export const ContainerIcon = styled.View`
    height: 50px;
    width: 50px;
    background-color: ${Colors.darkSecundary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;