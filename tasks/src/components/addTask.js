import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import commonSyles from '../commonStyles'

const initialStates =  { desc: '', date: new Date() }

export default class AddTask extends Component {
    state = {...initialStates}

    save = () => {

        if (!this.state.desc.trim()) {
            Alert.alert("Dados invalidos", "Informe uma descricao válida")
            return
        }
        
        const data = { ...this.state }
        this.props.onSave(data)
        this.setState({ ...initialStates })
    }

    render() {
        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>    
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput placeholder="Descricao" style={styles.input}
                        onChangeText={desc => this.setState({ desc })} 
                        value={this.state.desc} />
                    <DatePicker mode='date' date={this.state.date}
                        onDateChange={date => this.setState({ date })} />
                    <View styles={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end'}}>
                
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback> 
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonSyles.colors.default
    },
    header: {
        backgroundColor: commonSyles.colors.secondary,
        color: commonSyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15
    },
    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    }
})