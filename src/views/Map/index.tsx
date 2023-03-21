import { Text, View } from "react-native";
import { Container, Img, Content, Title, Actions, Quantity, Card, Counter, Cards, Circle, ModalHeader } from './style';
import { Images } from "../../Images";
import { Button, Input } from "../../components";
import { ColorsTypes } from "../../types/ColorsTypes";
import store from "../../store";
import occurrence from "../../routes/occurrence";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddOccourence from "../../components/AddOccourence";
import { Input as AddInput } from "react-native-elements";

const Map = ({ props }: any) => {

    const user = useSelector((state: any) => state.user)
    const [occurrences, setOccurrences] = useState<any>();
    const [addOcourrence, setAddOccourence] = useState<boolean>();

    function handleTypesOccurrence() {
        console.log('--- login')
        occurrence.handleTypesOccurrence().then((data) => {
            console.log('-- data', data)
        })

        occurrence.handleGetOccurrence(user.user.cep).then((data) => {
            console.log('-- data', data)
            setOccurrences(data)
        })
    }
    useEffect(() => {
        handleTypesOccurrence();
    }, [])

    if (occurrences && occurrences.total_occurrences) return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
            <Content>
                <ModalHeader>
                    <Title> CEP: {user.user.cep} </Title>
                </ModalHeader>
                <Title>
                    Essa região teve <Counter> {(occurrences || {}).total_occurrences} </Counter> ocorrências de crimes:
                </Title>
                {!addOcourrence ?
                    <>
                        <Cards>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).assalto.percentage === null ? '0' : (occurrences || {}).assalto.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Assaltos </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).assedio.percentage === null ? '0' : (occurrences || {}).assedio.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Assédios </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).furto.percentage === null ? '0' : (occurrences || {}).furto.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Furtos </Quantity>
                            </Card>
                        </Cards>
                        <Cards>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).roubo.percentage === null ? '0' : (occurrences || {}).roubo.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Roubos </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).outros.percentage === null ? '0' : (occurrences || {}).outros.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Outros </Quantity>
                            </Card>
                        </Cards>
                    </>
                    :
                    <Content>
                        <AddInput placeholder="CEP" />
                        <AddInput placeholder="Tipo (Assalto, furto, roubo, assédio, outros)" />
                        <AddInput placeholder="Descrição" />
                    </Content>
                }
                <Actions>
                    <Button fill title="Adicionar ocorrência" onPress={() => setAddOccourence(true)} />
                    <Button title="Alterar localização" category={ColorsTypes.NEUTRAL} fill />
                </Actions>
            </Content>
        </Container>
    )

    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
            {!addOcourrence ? <Content>
                <Title>
                    Esse CEP não possui registros de ocorrências entre 30 dias.
                </Title>
                <Actions>
                    <Button fill title="Adicionar ocorrência" onPress={() => setAddOccourence(true)} />
                    <Button title="Alterar localização" category={ColorsTypes.NEUTRAL} fill />
                </Actions>
            </Content> :
                <Content>
                    <Title> Adicionar ocorrência </Title>
                    <AddInput placeholder="CEP" />
                    <AddInput placeholder="Tipo" />
                    <AddInput placeholder="Descrição" />
                </Content>}
        </Container>
    )
}

export default Map;