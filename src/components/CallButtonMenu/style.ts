import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const Container = styled.View`
    background-color: ${Colors.darkSecundary};
    border-radius: 100;
    height: 70;
    width: 70;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25;
    border: 2px solid white;
`;