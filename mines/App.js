import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando com Mines: </Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
