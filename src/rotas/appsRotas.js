import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/telas/Home';
import melhoresProdutores from './src/telas/Produtores/MelhoresProdutores';

const tab = createBottomTabNavigator();
const stack = createStackNavigator();

export default function appRotas(){
    return  <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Produtores" component={melhoresProdutores} />
        
      </tab.Navigator>
      <melhoresProdutores/>

    </NavigationContainer>
}