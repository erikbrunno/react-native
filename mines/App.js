import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando com Mines: </Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged/>
        <Field flagged opened/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
});
