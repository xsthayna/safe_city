import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ColorsTypes } from '../../types/ColorsTypes';
import { TextButton } from './style';
import  ButtonComponent from './Button';

export interface Props {
    category: ColorsTypes;
    fill?: boolean;
    title: string;
    onPress: any;
}

const Button: React.FC<Props> = ({ category, fill, title, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <ButtonComponent title={title}  fill={fill} category={category}>
                <TextButton fill={fill} category={category}>
                    { title || "Meu botão" }
                </TextButton>
            </ButtonComponent>
        </TouchableWithoutFeedback>
    )
}

export default Button;