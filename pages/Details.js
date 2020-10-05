// import React, { Component } from 'react';
// import { StyleSheet, View, Button} from 'react-native';

// export default class SecondPage extends Component {
//   static navigationOptions = {
//     title: 'First Page',
//     //Sets Header text of Status Bar
//     headerStyle: {
//       backgroundColor: '#f4511e',
//       //Sets Header color
//     },
//     headerTintColor: '#fff',
//     //Sets Header text color
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       //Sets Header text style
//     },
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Button title='Go next'
//         onPress={() =>navigate('SecondPage')}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



























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
     this.props.navigation.navigate('Auth');
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

export default DetailsScreen;




