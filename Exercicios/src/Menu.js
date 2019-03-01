import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import Inverter, { MegaSena } from './componente/Multi';
import Contador from './componente/Contador';
import Plataforma from './componente/Plataforma';
import ValidarProps from './componente/ValidarProps';
import Evento from './componente/Evento';
import Avo from './componente/comunicacaoDireta';

export default createDrawerNavigator({

    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label='Ano atual' ano={19} />
    },
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