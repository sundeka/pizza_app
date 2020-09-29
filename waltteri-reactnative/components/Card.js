import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from '../constants/constvalues'

const Card = (props)=>{
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles=StyleSheet.create({
    card:{
        shadowColor:Color.redcolor,
        shadowOffset:{width:10, height:20},
        shadowRadius:15,
        shadowOpacity:0,
        elevation:15,
        backgroundColor:Color.whitecolor,
        borderRadius:20,
    }
});

export default Card;