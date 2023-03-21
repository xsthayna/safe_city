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
import SelectDropdown from 'react-native-select-dropdown'

const Map = ({ props }: any) => {

    const user = useSelector((state: any) => state.user)
    const [occurrences, setOccurrences] = useState<any>();
    const [addOcourrence, setAddOccourence] = useState<boolean>();
    const [occurrenceTypes, setOccurrenceTypes] = useState<any>([]);
    const [newOccurence, setNewOccurence] = useState<{ cep: string, description: string, type: string }>({ cep: "", description: "", type: "" });

    function handleTypesOccurrence() {
        console.log('--- login')
        occurrence.handleTypesOccurrence().then((data) => {
            console.log('-- data', data)
            setOccurrenceTypes(data.types)
        })

        occurrence.handleGetOccurrence(user.user.cep).then((data) => {
            setOccurrences(data)
        })
    }

    function saveOcoorenceia() {
        occurrence.handleCreateOccurrence(newOccurence.description, newOccurence.type, newOccurence.cep).then(() => {
            console.log('---- salvou?')
            setAddOccourence(false)
        })
    }
    useEffect(() => {
        handleTypesOccurrence();
    }, [])

    useEffect(() => {
        occurrence.handleGetOccurrence(user.user.cep).then((data) => {
            setOccurrences(data)
        })
    }, [addOcourrence])

    if (occurrences && occurrences.total_occurrences) return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
            <Content>
                {!addOcourrence ?
                    <>
                        <Title>
                            Essa região teve <Counter> {(occurrences || {}).total_occurrences} </Counter> ocorrências de crimes:
                        </Title>
                        <Cards>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).total_types_occurrences.assalto.percentage === null ? '0' : (occurrences || {}).total_types_occurrences.assalto.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Assaltos </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).total_types_occurrences.assedio.percentage === null ? '0' : (occurrences || {}).total_types_occurrences.assedio.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Assédios </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).total_types_occurrences.furto.percentage === null ? '0' : (occurrences || {}).total_types_occurrences.furto.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Furtos </Quantity>
                            </Card>
                        </Cards>
                        <Cards>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).total_types_occurrences.roubo.percentage === null ? '0' : (occurrences || {}).total_types_occurrences.roubo.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Roubos </Quantity>
                            </Card>
                            <Card>
                                <Circle>
                                    <Quantity> {(occurrences || {}).total_types_occurrences.outros.percentage === null ? '0' : (occurrences || {}).total_types_occurrences.outros.percentage}%</Quantity>
                                </Circle>
                                <Quantity> Outros </Quantity>
                            </Card>
                        </Cards>
                        <Actions>
                            <Button fill title="Adicionar ocorrência" onPress={() => setAddOccourence(true)} />
                        </Actions>
                    </>
                    :
                    <Content>
                        <ModalHeader>
                            <Title> CEP: {user.user.cep} </Title>
                        </ModalHeader>
                        <AddInput placeholder="CEP" onChangeText={(text: string) => setNewOccurence({ ...newOccurence, cep: text })} />
                        <SelectDropdown
                            data={occurrenceTypes}
                            rowTextStyle={{
                                color: "black",
                            }}
                            defaultButtonText="Tipo"
                            buttonStyle={{
                                width: "100%"
                            }}
                            onSelect={(selectedItem, index) => {
                                setNewOccurence({ ...newOccurence, type: selectedItem })
                            }}
                        />
                        <AddInput placeholder="Descrição" onChangeText={(text: string) => setNewOccurence({ ...newOccurence, description: text })} />
                        <Button fill title="Salvar ocorrência" onPress={() => saveOcoorenceia()} />
                    </Content>
                }
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
                    <Title> Adicionar nova ocorrência </Title>
                    <AddInput placeholder="CEP" onChangeText={(text: string) => setNewOccurence({ ...newOccurence, cep: text })} />
                    <SelectDropdown
                        data={occurrenceTypes}
                        rowTextStyle={{
                            color: "black",
                        }}
                        defaultButtonText="Tipo"
                        buttonStyle={{
                            width: "100%"
                        }}
                        onSelect={(selectedItem, index) => {
                            setNewOccurence({ ...newOccurence, type: selectedItem })
                        }}
                    />
                    <AddInput placeholder="Descrição" onChangeText={(text: string) => setNewOccurence({ ...newOccurence, description: text })} />
                    <Button fill title="Salvar ocorrência" onPress={() => saveOcoorenceia()} />
                </Content>}
        </Container>
    )
}

export default Map;