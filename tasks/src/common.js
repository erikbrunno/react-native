import { Alert, Platform } from 'react-native'

const server = 'http://localhost:3000'

function showError(err) {
    Alert.alert('Ocorreu um problema', `Mensagem: ${err}`)
}

export {server, showError}