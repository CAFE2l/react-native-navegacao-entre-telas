import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from './src/telas/Produtor';

const stack = createNativeStackNavigator();


export default function ProdutorRotas({componentePrincipal = Home}){
    return <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Homescreen" component={componentePrincipal} />
        <stack.Screen name="Produtor" component={Produtor} />
    </stack.Navigator>
}