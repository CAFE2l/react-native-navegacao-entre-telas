import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Produtor() {
    const route = useRoute();
    const produtor = route.params;
    console.log(produtor);


    return <Text>Produtor</Text>
}