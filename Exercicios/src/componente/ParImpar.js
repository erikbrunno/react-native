import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../style/Padrao';

export default props => 
    <View>
        {parOuImpar(props.numero)}
    </View>


function parOuImpar(params) {

    const valor = params  % 2 == 0 ? 'Par' : 'Impar';
    return <Text style={ Padrao.ex }>{valor}</Text>
}