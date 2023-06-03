import styled from 'styled-components/native';
import { ImageBackground, Image, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Button } from '../../components';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const Header = styled.View`
    height: 40px;
`;

export const Img = styled.Image`
    height: 50px;
    width: 200px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.darkNeutral};
    text-align: center;
`;

export const Counter = styled.Text`
    color: ${Colors.darkSecundary};
    font-weight: bold;
`;

export const Actions = styled.View`
    width: 100%;
    gap: 10px;
`;

export const Cards = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 20px;
`;

export const Circle = styled.View`
    border: 2px solid ${Colors.secundary};
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
`;

export const Card = styled.View`
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Quantity = styled.Text`
    color: ${Colors.darkSecundary};
    font-weight: bold;
    font-size: 18px;
`;

export const ModalHeader = styled.Text`
    font-weight: bold;
`;

export const Address = styled.Text`
    padding: 10px 0;
    background-color: white;
    color: ${Colors.darkNeutral};
    text-align: center;
    font-weight: bold;
    position: absolute;
    z-index: 100;
    width: 100%;
    top: 0;
`;

export const AddOccourenceButton = styled.Text`
    position: absolute!important;
    z-index: 10;
    bottom: 85;
    background-color: ${Colors.primary};
    color: white;
    padding: 15px 30px;
    border-radius: 10px;
    width: 90%;
    font-weight: bold;
    text-align: center;
`;

export const ViewOccourenceButton = styled(AddOccourenceButton)`
    background-color: ${Colors.neutral};
    color: ${Colors.darkNeutral};
    bottom: 30;
`;