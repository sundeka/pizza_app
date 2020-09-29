import React, { useState, useEffect } from "react";
import {Button, TextInput, View, Text, FlatList, StyleSheet, Alert, ActivityIndicator} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";

const AddScreen = () => {
  const [fishList, setFishList]=useState([]);
  const [newFishBreed, setNewFishBreed]=useState('');
  const [newFishWeight, setNewFishWeight]=useState('');

  const breedInputHandler=(enteredText)=>{
    setNewFishBreed(enteredText);
  }
  const weightInputHandler=(enteredText)=>{
    setNewFishWeight(enteredText);
  }
  const addFishHandler=()=>{
    // setFishList(fishList=>[...fishList, {breed:newFishBreed, weight:newFishWeight}]);
    setFishList([{breed:newFishBreed, weight:newFishWeight}]);
    saveFish();
  }


  async function saveFish() {
    const response = await fetch("https://mobilelist.appspot.com/rest/fishservice/addjsonfish",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({breed:newFishBreed, weight:newFishWeight})
    });
    Alert.alert("New Fish added");
    // const responseData = await response.json();
    // console.log(responseData);
    // setFishList(fishList=>[...fishList, responseData]);
  }

//   useEffect(() => {
//     if (isLoading==true){
//       setLoading(false);
//       addData();
//     }
//   });

    return (
      <View style={{marginTop:50, flex:1}}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder="Fish's breed" 
                  style={styles.inputStyle} 
                  onChangeText={breedInputHandler}
                  value={newFishBreed}/>  
        <TextInput placeholder="Fish's weight" 
                  style={styles.inputStyle} 
                  onChangeText={weightInputHandler}
                  value={newFishWeight}/>  
      </View> 
      <View style={styles.buttoncontainer}>
        <Button title="Add" onPress={addFishHandler}/>
      </View>

        <FlatList
            data={fishList}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text>{item.id}) {item.breed}, {item.weight}</Text>
              </View>
            )}
            keyExtractor={item=>fishList.indexOf(item).toString()}
            />
      </View>
    );
};

const styles=StyleSheet.create({
  listItem:{
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#fce',    
  },
  inputcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
},
  buttoncontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  inputStyle:{
    width:100,
    height:50,
    padding:10,
    borderWidth:2,
    borderColor:'#f00',
  },

});

export default AddScreen;