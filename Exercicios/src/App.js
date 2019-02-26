import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import Inverter, { MegaSena } from './componente/Multi';

export default class App extends Component {
	render() {
		return (
			<View style={style.container}>
				
				<Simples texto='Flexivel'/>
				<ParImpar numero={30} />
				<Inverter texto='React Native'/>
				<MegaSena numeros={6} />
			</View>
		);
	}
}

const style = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	}
}) 
