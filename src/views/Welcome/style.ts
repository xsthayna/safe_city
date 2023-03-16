import styled from 'styled-components/native';
import { ImageBackground, Image, Text } from 'react-native';

export const Container = styled(ImageBackground)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.View`
    height: 40px;
`;

export const Img = styled.Image`
    height: 50px;
    width: 200px;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
`;

export const Actions = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
`;

export const Description = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const  RecoveryPassword = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Link = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;