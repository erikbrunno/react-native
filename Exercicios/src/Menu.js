import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import Inverter, { MegaSena } from './componente/Multi';

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={10} />,
        navigationOptions: { title: 'Par e Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel Teste' />
    }
}, {drawerWidth: 300})