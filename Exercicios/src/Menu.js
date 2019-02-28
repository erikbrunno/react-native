import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import Inverter, { MegaSena } from './componente/Multi';
import Contador from './componente/Contador';
import Plataforma from './componente/Plataforma';

export default createDrawerNavigator({

    Plataforma: {
        screen: () => <Plataforma />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100} />,
        navigationOptions: { title: 'Contador' }
    },
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