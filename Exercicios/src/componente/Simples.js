import React from 'react';
import { Text } from 'react-native';
import Padrao from '../style/Padrao'

export default props => 
    <Text style={ Padrao.ex }>Parametro: { props.texto } </Text>