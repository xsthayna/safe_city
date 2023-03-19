import { Input as InputElement } from 'react-native-elements';
import { StyledInput } from './style';

const Input = ({ ...props }) => {

    return (
        <StyledInput
            inputStyle={{ color: "white", fontSize: 16 }}
            placeholderTextColor="rgba(255, 255, 255, 0.425)"
            inputContainerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.096)", paddingLeft: 10 }}
            containerStyle={{ width: props.width }}
            {...props}
        />
    )
}

export default Input;