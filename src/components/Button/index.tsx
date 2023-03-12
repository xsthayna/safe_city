import React from 'react';
import { ColorsTypes } from '../../types/ColorsTypes';
import { TextButton } from './style';
import  ButtonComponent from './Button';

export interface Props {
    category: ColorsTypes;
    fill?: boolean;
    title: string;
}

const Button: React.FC<Props> = ({ category, fill, title }) => {

    return (
        <ButtonComponent title={title} category={category}>
            <TextButton fill={fill} category={category}>
                { title || "Meu botão" }
            </TextButton>
        </ButtonComponent>
    )
}

export default Button;