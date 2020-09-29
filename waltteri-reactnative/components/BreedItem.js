import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

const BreedItem=(props)=>{

    const [newId, setId]=useState('');
    const [newBreed, setBreed]=useState('');
    const [newWeight, setWeight]=useState('');
    // const [newId, setId]=useState('');
    
    // const fishInputHandler=(enteredText)=>{
    //      setFish(enteredText);
    // }
    const breedInputHandler=(enteredText)=>{
        setBreed(enteredText);
    }
    const weightInputHandler=(enteredText)=>{
        setWeight(enteredText);
    }
    const idInputHandler=(enteredText)=>{
        setId(enteredText);
    }

    
    return (
        
      <View style={styles.screen}>
      
      <View style={styles.formStyle1}>
        <TextInput placeholder="Id" 
            style={styles.inputStyle} 
            onChangeText={idInputHandler}
        />
      </View>

      {/* <View style={styles.formStyle1}>
            TextInput placeholder="fishname" 
                style={styles.inputStyle} 
                onChangeText={fishInputHandler}
      </View>   */}

      <View style={styles.formStyle1}>
        <TextInput placeholder="Breed" 
            style={styles.inputStyle} 
            onChangeText={breedInputHandler}
        />
      </View>

      <View style={styles.formStyle2}>
        <TextInput placeholder="Weight" 
            style={styles.inputStyle} 
            onChangeText={weightInputHandler}
        />
      </View>
      <View style={styles.buttonstyle}>
            <Button title="Add" onPress={()=>props.onAddFish(newId, newBreed, newWeight)}/>
      </View>  
      </View>    

    );
}

const styles=StyleSheet.create({
    formStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
      },
      inputStyle: {
        borderWidth: 2, 
        borderColor: 'red', 
        padding: 10,
        width:'80%',
      },
    listItemStyle: {
      borderWidth: 1, 
      borderColor: 'blue', 
      padding: 5,
      backgroundColor:"#abc",
      marginVertical:5,
    },
    screen: {
        padding: 60,
      },
      formStyle1: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
      },
      formStyle2: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
      },
      buttonstyle: {
        paddingTop: 0,
        paddingBottom: 10,
        width: '15%' ,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    
});

export default BreedItem;


             