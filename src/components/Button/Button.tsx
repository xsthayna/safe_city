import React from 'react';
import { ColorsTypes } from '../../types/ColorsTypes';
import { StyledButton, FilledButton } from './style';

export interface Props {
    category: ColorsTypes;
    fill?: boolean;
    title: string;
    children: React.ReactNode;
}

const ButtonComponent: React.FC<Props> = ({ ...props}) => {
    if (props.fill) return ( 
        <FilledButton {...props} />
    )
    return (
        <StyledButton {...props} />
    )
}

export default ButtonComponent;