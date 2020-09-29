import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color, {Paddings} from '../constants/constvalues';

const NumberContainer=(props)=>{
    return (
        <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>

    );
}

const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Color.greencolor,
        padding:Paddings.midsize,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color:Color.bluecolor,
        fontSize:22,
        
    }
});

export default NumberContainer;