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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
`;

export const Items = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
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
    text-align: center;
`;

export const Link = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin: 10px 0;
`;

export const Description = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
    color: white;
    text-align: center;
    margin-bottom: 15px;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
`;