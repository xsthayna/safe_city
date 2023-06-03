import { Text, View, PermissionsAndroid, TouchableWithoutFeedback } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Geolocation from "@react-native-community/geolocation";

import store from "../../store";

import { 
    Container, Img, 
    Content, Title, 
    Actions, Quantity, 
    Card, Counter, 
    Cards, Circle, 
    ModalHeader, Address, 
    ViewOccourenceButton, AddOccourenceButton 
} from './style';
import { Images } from "../../Images";
import { Button, Input } from "../../components";
import AddOccourence from "../../components/AddOccourence";
import { Input as AddInput } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/Feather';


import occurrence from "../../routes/occurrence";
import address from "../../routes/address";

import { Coordinates, Occurence } from "../../types";
import { ColorsTypes } from "../../types/ColorsTypes";



const Map = ({ props }: any) => {

    const user = useSelector((state: any) => state.user)
    const [occurrences, setOccurrences] = useState<any>();
    const [addOcourrence, setAddOccourence] = useState<boolean>();
    const [occurrenceTypes, setOccurrenceTypes] = useState<any>([]);
    const [newOccurence, setNewOccurence] = useState<Occurence>({ cep: "", description: "", type: "" });
    const [coordinates, setCoordinates] = useState<Coordinates>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    });
    const [userAddress, setUserAddress] = useState();
    const [viewOccourences, setViewOccourences] = useState<boolean>()

    function handleTypesOccurrence() {
        occurrence.handleTypesOccurrence().then((data) => {
            setOccurrenceTypes(data.types)
        })

        occurrence.handleGetOccurrence(user.user.cep).then((data) => {
            setOccurrences(data)
        })
    }

    function saveOcoorenceia() {
        occurrence.handleCreateOccurrence(newOccurence.description, newOccurence.type, newOccurence.cep).then(() => {
            setAddOccourence(false)
        })
    }

    function getUserAddress(latitude: number, longitude: number) {
        address.getUserAddress(latitude, longitude).then((response) => {
            setUserAddress(response);
        })
    }
    

    useEffect(() => {
        handleTypesOccurrence();
        callLocation();
    }, [])

    useEffect(() => {
        occurrence.handleGetOccurrence(user.user.cep).then((data) => {
            setOccurrences(data)
        })
    }, [addOcourrence])

    const callLocation = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar sua localização.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
        } else {
        }
      }

      const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {

            const currentLatitude = JSON.stringify(position.coords.latitude);
            const currentLongitude = JSON.stringify(position.coords.longitude);

            setCoordinates({ ...coordinates, latitude: Number(currentLatitude), longitude: Number(currentLongitude) });
            getUserAddress(Number(currentLatitude), Number(currentLongitude));
        },
          (error) => console.log(error.message),
          { enableHighAccuracy: true, timeout: 12000, maximumAge: 1000 }
        );
        const watchID = Geolocation.watchPosition((position) => {
          const currentLatitude = JSON.stringify(position.coords.latitude);
          const currentLongitude = JSON.stringify(position.coords.longitude);
          console.log(currentLatitude);
          console.log(currentLongitude);
        });
        console.log(watchID);
      }

    return (
        <Container>
            <Address> 
                {userAddress?.route} - {userAddress?.sublocality}, {userAddress?.country} 
            </Address>
            <TouchableWithoutFeedback onPress={() => setAddOccourence(true)}>
                <AddOccourenceButton> Adicionar ocorrência </AddOccourenceButton>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setViewOccourences(true)}>
                <ViewOccourenceButton> Visualizar ocorrências </ViewOccourenceButton>
            </TouchableWithoutFeedback>

            <MapView 
                initialRegion={coordinates} 
                region={coordinates}
                style={{width: '100%', height: '100%'}}
                minZoomLevel={17}
                zoomEnabled={true}
                loadingEnabled={true}
            >
                <Marker 
                    coordinate={{
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude
                    }}
                />
            </MapView>
        </Container>
    )

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