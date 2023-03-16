import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import { ColorsTypes } from '../../types/ColorsTypes';

interface Props {
    category: ColorsTypes;
    fill?: boolean;
}

export const StyledButton = styled.View`
    border: 2px solid ${(props: Props) => Colors[props.category || ColorsTypes.PRIMARY]};
    height: 50px;
    width: 100%;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus{
        background-color: red;
    }
`;

export const TextButton = styled.Text`
    color: ${(props: Props) => props.fill ? 
        (props.category === ColorsTypes.NEUTRAL ? Colors[ColorsTypes.DARK_NEUTRAL] : 
        props.category === ColorsTypes.WHITE ? Colors[ColorsTypes.PRIMARY] : 'white') 
        : Colors[props.category || ColorsTypes.PRIMARY]};
    font-size: 16px;
    font-weight: bold;
`;

export const FilledButton = styled(StyledButton)`
    background-color: ${(props: Props) => Colors[props.category || ColorsTypes.PRIMARY]};
    border: none;
`;