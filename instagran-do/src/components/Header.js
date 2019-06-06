import React, { Component } from 'react'
import  {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Instagrando</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 15,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 32,
        width: 32,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        height: 32,
        fontSize: 25
    }
})

export default Header