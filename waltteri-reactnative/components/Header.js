import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from '../constants/constvalues'

const Header=(props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:Color.redcolor,
        width:'100%',
        height:90,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
    },
    title:{
        fontSize:28,
        color:Color.greencolor,
    }
});

export default Header;