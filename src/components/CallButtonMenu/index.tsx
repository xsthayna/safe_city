import { Container } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback, Linking } from 'react-native';

const CallButtonMenu = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL("tel:190")}>
            <Container>
                <Icon name="phone" size={34} color={"white"} />
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default CallButtonMenu;