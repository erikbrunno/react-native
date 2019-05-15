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

import axios from 'axios'
import { server, showError } from '../common'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from '@expo/vector-icons/FontAwesome'
import AddTask from '../components/addTask'
import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'


export default class Agenda extends Component {
    
    state = {
        tasks: [],
        visibleTask: [],
        showDoneTask: true,
        showAddTask: false,
    }
    
    addTask = async task => {
       
        try {
            
            await axios.post(`${server}/tasks`, {
                desc: task.desc,
                estimateAt: task.date
            })

            this.setState({  showAddTask: false }, this.loadTask)
        } catch (err) {
            showError(err)
        }
    }

    deleteTask = async id => {
        
        try {
            await axios.delete(`${server}/tasks/${id}`)
            await this.loadTask()
        } catch (err) {
            showError(err)
        }
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

    componentDidMount =  async() => {
       this.loadTask()
    }

    toggleTask = async id => {
       try {
            await axios.put(`${server}/tasks/${id}/toggle`)
            await this.loadTask()
       } catch (err) {
            showError(err)
       }
    }

    loadTask = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTask)
        } catch (err) {
            showError(err)
        }
    }

    render() {
        let styleColor = null
        let image = null

        switch(this.props.daysAhead) {
            case 0: 
                styleColor = commonStyles.colors.today
                image = todayImage
                break
            case 1:
                styleColor = commonStyles.colors.tomorrow
                image = tomorrowImage
                break
            case 7:
                styleColor = commonStyles.colors.week
                image = weekImage
                break
           default:
                styleColor = commonStyles.colors.month
                image = monthImage
                break
        }

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })} />
                <ImageBackground source={image} 
                    style={styles.background}>
                    
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars' size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTask ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
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
                <Button color={styleColor} title="Adicionar"
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
        justifyContent: 'space-between'
    }
})