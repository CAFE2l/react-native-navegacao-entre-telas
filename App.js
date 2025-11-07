import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/telas/Home';
import melhoresProdutores from './src/telas/Produtores/MelhoresProdutores';
import attRotas from './src/rotas/appsRotas';
import appRotas from './src/rotas/appsRotas'; 

const tab = createBottomTabNavigator();
const stack = createStackNavigator();


export default function App() {

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <appRotas/>
  </SafeAreaView>
}
