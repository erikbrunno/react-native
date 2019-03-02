import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Ana', nota: 9.1},
    {id: 3, nome: 'Bia', nota: 5.4},
    {id: 4, nome: 'Claudia', nota: 7.6},
    {id: 5, nome: 'Roberto', nota: 6.8},
    {id: 6, nome: 'Guilherme', nota: 9.9},
    {id: 7, nome: 'Rafael', nota: 10.0},
    {id: 8, nome: 'Rebeca', nota: 8.8},
    {id: 9, nome: 'Tobias', nota: 7.9}
]
    
const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={ {fontWeight: 'bold' }}>Nota: { props.nota }</Text>
    </View>

export default props => {

    const renderItem =({ item }) => {
        return <Aluno {...item } />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString() } />
        </ScrollView>
    )
}