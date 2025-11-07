import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Cesta from './Produtor/componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import topo from '../../assets/produtores/topo.png';


const TopoLista = () => {
    return <>
        <Topo titulo={tituloProdutor} imagem={topo} altura={150}/>
        <view style={estilos.conteudo}>
            <view style={estilos.logo}>
                <Image source={imagem} style={estilos.produtorImage} />
                <Text style={estilos.produtor}>{nome}</Text>            
            </view>
            <Text style={estilos.cestas}>{tituloCestas}</Text>
        </view>
    </>
}

export default function Produtor() {
    const route = useRoute();
    const { tituloProdutor, tituloCestas} = useTextos();

    const { detalhes, itens, produtor } = route.params;
    const TopoLista = () => {
        return <>
            <Topo titulo={tituloProdutor} imagem={topo} altura={150}/>
</>
    }

    return <FlatList
        ListHeaderComponent={TopoLista}
        contentContainerStyle={estilos.conteudo}
        
        data={cestas}
        renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
        keyExtractor={({ nome }) => nome}
        style={estilos.lista}
    />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
