import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

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

export const Form = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    color: white;
    margin-bottom: 15px;
`;

export const Link = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin: 10px 0;
`;