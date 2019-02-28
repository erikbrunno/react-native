import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../style/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }
}