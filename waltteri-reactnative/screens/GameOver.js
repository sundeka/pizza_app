import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { recoveredProps } from 'expo-error-recovery';




const GameOver=(props)=>{


    return(
        <View style={styles.screen}>
            <Text>App guessed your number in {props.count} tries!</Text>
            <Text>Game Over!</Text>
            <Button title='OK' onPress={()=>props.newGame(0)}/>
        </View>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
export default GameOver;