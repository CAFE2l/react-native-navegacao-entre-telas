import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/telas/Home';
import melhoresProdutores from './src/telas/Produtores/MelhoresProdutores';
import ProdutorRotas from './produtorRotas';
import melhoresProdutoresRotas from './melhoresProdutoresRotas';
import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const tab = createBottomTabNavigator();
const stack = createStackNavigator();

export default function appRotas(){
    return  <NavigationContainer>
      <tab.Navigator screenOptions={ ({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ color }) => {
          let Icon = Home;

          if (route.name === 'Melhores Produtores'){
            Icon = Coracao;
          }

          return <Icon color={color}/>
        },
        tabBarActiveTintColor:  '#2A9F85', 
        tabBarInactiveTintColor: '#C7C7C7', 

        })}>
        <tab.Screen name="Home" component={ProdutorRotas} />
        <tab.Screen name="Produtores" component={melhoresProdutoresRotas} />
        
      </tab.Navigator>
      <melhoresProdutores/>

    </NavigationContainer>
}