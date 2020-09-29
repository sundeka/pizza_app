import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


const BreedItem2=(props)=>{
    return(
        <View style={styles.listItem}>
               <Text>{item.id}), {item.breed}, {item.weight}</Text>
        </View>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: {
      borderWidth: 1, 
      borderColor: 'blue', 
      padding: 5,
      backgroundColor:"#abc",
      marginVertical:5,
    },
  });

  export default BreedItem2;