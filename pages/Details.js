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
     title: 'Order Page',
     headerRight: <View />
   }

   render(){
      const { navigate } = this.props.navigation;
     return (
            
        <View style={styles.container}>   
          <Text style={styles.textStyle}>NAME:</Text>
            <TextInput placeholder="Your name" style={styles.inputStyle}/> 
              <Text>ADDRESS:</Text>
            <TextInput placeholder="Your address" style={styles.inputStyle}/> 
              <Text>EMAIL:</Text>
            <TextInput placeholder="Your email" style={styles.inputStyle}/> 
              <Text>PHONE:</Text>
            <TextInput placeholder="Your phone" style={styles.inputStyle}/> 


            <Text>TOTAL PRICE</Text>
            <Text>8.00€</Text>




            <View style={styles.BtnContainer}>
            <TouchableOpacity 
              style={styles.userBtn} 
              onPress={() => alert("Valmistellaan tilausta")}
              
            >
              <Text style={styles.btnTxt}>Order Now</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.userBtn}
              onPress={this._logout}
              
            >
              <Text style={styles.btnTxt}>Logout</Text>
            </TouchableOpacity>

            {/* <Button title="Order now" style={styles.orderButton}/> */}
           {/* <Button onPress={this._logout} title="Logout" style={styles.orderButton2} /> */}



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
    margin:2,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  formStyle: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:"center"
  },
  inputStyle: {
    backgroundColor: '#fff',
    borderWidth: 2, 
    borderColor: 'black', 
    padding: 10,
    width:'80%',
  },
  textStyle: {
    textAlign: 'left'

  },
  orderButton: {
    position: 'absolute',
    marginBottom: 10,

  },
  orderButton2: {
    position: 'absolute',
    marginTop: 20,

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




