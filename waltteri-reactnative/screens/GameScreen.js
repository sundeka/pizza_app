import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';




// const generateRandomNumber=(min, max, notThis)=>{
//     min=Math.ceil(min);
//     max=Math.floor(max);
//     const rndNumber=Math.floor(Math.random()*(max-min))+min;
//     if (rndNumber==notThis){
//         return generateRandomNumber(min, max, notThis);//function calling itself
//     }
//     else{
//         return rndNumber;
//     }
// }
const generateRandomNumber=(min, max, notThis)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    let rndNumber=0;
    do{
        rndNumber=Math.floor(Math.random()*(max-min))+min;
    }while(rndNumber==notThis);
    return rndNumber;
}


const GameScreen=(props)=>{
    const [newGuess, setNewGuess]=useState(generateRandomNumber(1,100, props.userInput));
    const [tryCount, setCount]=useState(1);
    const currentLow=useRef(1);//Even if the ref values are changed
    const currentHigh=useRef(100);//screen is NOT re-rendered

    // useEffect(()=>{
    //     if (newGuess==props.userNumber){

    //     }
    // });
    const nextGuess=(direction)=>{
        if ((direction=='lower' && newGuess<props.userNumber) || (direction=='higher' && newGuess>props.userNumber)){
            Alert.alert("Wrong hint!");
            return;
        }
        if (direction=='lower'){
            currentHigh.current=newGuess -1;
            setCount(tryCount +1);
        }
        else{
            currentLow.current=newGuess +1;
            setCount(tryCount +1);
        }
        const nextNumber=generateRandomNumber(currentLow.current, currentHigh.current, newGuess);
        setNewGuess(nextNumber);
        if (nextNumber==props.userNumber){
            props.stopGame(tryCount +1);
            return;
        }
    }

    return(
        <View style={styles.screen}>
            <Text>Number to guess is: {props.userNumber}</Text>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{newGuess}</NumberContainer>
            <Text>Number of tries: {tryCount}</Text>
            <Card style={styles.buttonsInARow}>
                {/* Two different ways to call with parameters */}
                <Button title='LOWER' onPress={nextGuess.bind(this,'lower')}/>
                <Button title='HIGHER' onPress={()=>{nextGuess('higher')}}/>
            </Card>
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonsInARow:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
    }
});

export default GameScreen;