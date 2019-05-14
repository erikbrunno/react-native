import { Alert, Platform } from 'react-native'

const server = 'http://192.168.0.33:3000'

function showError(err) {
    Alert.alert('Ocorreu um problema', `Mensagem: ${err}`)
}

export {server, showError}