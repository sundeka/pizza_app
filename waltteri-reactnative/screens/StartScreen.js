import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableWithoutFeedback, 
    Keyboard, //Not a component but an object which has methods
    Alert //Not a component but an object which has methods
} from 'react-native';
import Card from '../components/Card';

import Color from '../constants/constvalues'
import {Paddings} from '../constants/constvalues'
import NumberContainer from '../components/NumberContainer';


const StartScreen = (props)=>{
    const[enteredText, setText]=useState('');
    const[started, setStarted]=useState(false);
    const[selectedNumber, setSelectedNumber]=useState();

    const inputText=(input)=>{
        // setText(input.replace(/[^0-9]/g, ''));
        let x=input.replace(/[^0-9]/g, '');
        setText(x);
    };
    const emptyInputText=()=>{
        setText("");
        setStarted(false);
    }
    const startTheGame=()=>{
        Keyboard.dismiss();
        const chosenNumber=parseInt(enteredText);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            setStarted(false);
            Alert.alert(
                "Not a valid number",//title - put at least this - the rest is up to you
                'The number should be between 1 and 99',//Extra message
                //There can be several buttons
                //Buttons: button text, style(cancel, default or destructive), and what happens when pressed
                [{text:'OK!', style:'destructive', onPress:emptyInputText},
                //The second button
                {text:'Continue!', style:'default', onPress:()=>dismissKeyBoard('-1')}]
                );
            return;
        }
        setStarted(true);
        setSelectedNumber(chosenNumber);
        setText("");
    }
    function dismissKeyBoard(val){
        Keyboard.dismiss();
        setText(val);
    }

    let gamestartConfirmed;//This is undefined - empty
    if (started){
        gamestartConfirmed=(
        <Card style={styles.gameStartCard}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='Start Game' onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>
        );
    }


    return (
        <TouchableWithoutFeedback onPress={()=>{dismissKeyBoard("47");}} >
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Write a number between 1-99</Text>
                <TextInput style={styles.inputField} 
                    placeholder={'56'} 
                    keyboardType={'number-pad'} 
                    maxLength={2}
                    onChangeText={inputText}
                    value={enteredText}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Reset' onPress={()=>{emptyInputText();}} color={Color.redcolor} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Start'  color={Color.greencolor} onPress={()=>{startTheGame();}}/>
                    </View>
                </View>
            </Card>
            {gamestartConfirmed}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:Paddings.midsize,
        alignItems:"center",
    },
    title:{
        fontSize:20,
        justifyContent:'center', 
        
        
    },
    inputField:{
        marginTop:10,
        borderColor:Color.bluecolor,
        borderWidth:2,
        width:50,
        textAlign:"center",
                
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
    },
    buttonStyle:{
        width:100,
    },
    inputContainer:{
        padding:20,
        marginTop:20,
        width:300,
        maxWidth:'80%',
        alignItems:"center",
    },
    gameStartCard:{
        alignItems:'center',
        padding:10,
        margin:10,
    }

});

export default StartScreen;