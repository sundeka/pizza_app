import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Order Page',
    //Sets Header text of Status Bar
  };



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>NAME:</Text>
        <TextInput placeholder="Your name" style={styles.inputStyle}/> 
        <Text>ADDRESS:</Text>
        <TextInput placeholder="Your adress" style={styles.inputStyle}/> 
        <Text>EMAIL:</Text>
        <TextInput placeholder="Your email" style={styles.inputStyle}/> 
        <Text>PHONE:</Text>
        <TextInput placeholder="Your phone" style={styles.inputStyle}/> 


        <Text>TOTAL PRICE</Text>
        <Text>8.00€</Text>



        <Button title="Order now" style={styles.orderButton}/>

      </View>
    
    );
  }

  

}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    bottom: 35

  }

});
