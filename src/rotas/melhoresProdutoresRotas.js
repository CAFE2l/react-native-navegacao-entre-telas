import React from 'react';
import ProdutorRotas from './produtorRotas';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import melhoresProdutores from './src/telas/Produtores/MelhoresProdutores';

const stack = createNativeStackNavigator();

export default function melhoresProdutoresRotas(){
   return <ProdutorRotas componentePrincipal={melhoresProdutores}/>


}