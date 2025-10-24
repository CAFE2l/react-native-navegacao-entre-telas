import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/telas/Home';
import melhoresProdutores from './src/telas/Produtores/MelhoresProdutores';

export default function App() {

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <NavigationContainer>
      <Home melhoresProdutores={false} />
    
    </NavigationContainer>
  </SafeAreaView>
}