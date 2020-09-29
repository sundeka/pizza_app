import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

import BreedItem from './components/BreedItem';
import BreedItem2 from './components/BreedItem2';




const App = () =>{
  // const [newFish, setFish]=useState('');
  const [fishList, addFish]=useState([]);
  const [keyValue, incrementKey]=useState(1);
  


  

  
  const addFishToList=()=>{
    addFish(fishList=>[...fishList, {someKey:keyValue.toString(), someValue:newId, someValue2:newWeight, someValue3:newBreed}]);
    incrementKey(keyValue+1);
  }

  return (

    <View style={styles.screen}>
      <BreedItem onAddFish={addFishToList} />
      <FlatList 
        data={fishList} 
        renderItem={itemData => <ListItem number={itemData.index} mykey={itemData.item.someKey} value={itemData.item.someValue} 
        value={itemData.item.someValue2} value={itemData.item.someValue3} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    padding: 60,
  },

});

export default App;