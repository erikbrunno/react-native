import React, {Component} from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from './style/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            style={Padrao.inpu}
            onChangeText={props.chamarQuandoMudar} />
    </View>

export class TextoSincronizado extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        
    }
}