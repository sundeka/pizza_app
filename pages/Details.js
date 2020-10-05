import React, { Component } from 'react';
import {StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, Button, AsyncStorage} from 'react-native';


class DetailsScreen extends Component {
   static navigationOptions = {
     title: 'My app',
     headerRight: <View />
   }

   render(){
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>      
        <View style={styles.container}>
          <Button onPress={this._logout} title="Logout" />






        </View>
        </View>
     );
   }

   _logout = async() => {
     await AsyncStorage.clear();
   }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A32706',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",

  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%",
    // fontSize: 18,
    // textAlign: "center",
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center",
    
  }
});






