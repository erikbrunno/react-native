import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    Button
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from '@expo/vector-icons/FontAwesome'
import AddTask from '../components/addTask';


export default class Agenda extends Component {
    
    state = {
        tasks: [
            {id: Math.random(), desc: 'Estudando React Native',
                estimateAt: new Date, doneAt: new Date() },
            {id: Math.random(), desc: 'Terminar o curso React Native',
                estimateAt: new Date, doneAt: null }, 
            {id: Math.random(), desc: 'Estudando React Native',
                estimateAt: new Date, doneAt: new Date() },
            {id: Math.random(), desc: 'Terminar o curso React Native',
                estimateAt: new Date, doneAt: null }, 
            {id: Math.random(), desc: 'Estudando React Native',
                estimateAt: new Date, doneAt: new Date() },
            {id: Math.random(), desc: 'Terminar o curso React Native',
                estimateAt: new Date, doneAt: null }, 
            {id: Math.random(), desc: 'Estudando React Native',
                estimateAt: new Date, doneAt: new Date() },
            {id: Math.random(), desc: 'Terminar o curso React Native',
                estimateAt: new Date, doneAt: null }, 
            {id: Math.random(), desc: 'Estudando React Native',
                estimateAt: new Date, doneAt: new Date() },
            {id: Math.random(), desc: 'Terminar o curso React Native',
                estimateAt: new Date, doneAt: null }, 
        ],
        visibleTask: [],
        showDoneTask: true,
        showAddTask: false,
    }
    
    addTask = task => {
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.date,
            doneAt: null
        })
        this.setState({ tasks, showAddTask: false }, this.filterTask)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({tasks}, this.filterTask)
    }

    filterTask= () => {
        let visibleTask = null
        if (this.state.showDoneTask) {
            visibleTask = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTask = this.state.tasks.filter(pending)
        }
        this.setState({visibleTask})

    }

    toggleFilter= () => {
        this.setState({ showDoneTask: !this.state.showDoneTask }, this.filterTask)
    }

    componentDidMount = () => {
        this.filterTask()
    }

    toggleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if(task.id === id) {
                task = {...task}
                task.doneAt = task.doneAt ? null : new Date()
            }
            return task
        })

        this.setState({ tasks }, this.filterTask)
    }
    render() {
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })} />
                <ImageBackground source={todayImage} 
                    style={styles.background}>
                    
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTask ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                        {moment().locale('pt-br').format('ddd, d [de] MMMM')}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.taskContainer}>
                   <FlatList data={this.state.visibleTask}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => 
                            <Task {...item} 
                                toggleTask={this.toggleTask}
                                onDelete={this.deleteTask}/> }></FlatList>
                </View>
                <Button color={commonStyles.colors.today} title="Adicionar"
                    onPress={() => { this.setState({ showAddTask: true}) }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    },
    iconBar: {
        marginTop: Platform.OS === 'ios' ? 30 : 25,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})