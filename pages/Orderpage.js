import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {

    constructor() {
        super()
        this.state = {
          firstname: '',
          lastname: '',
          Address: '',
          Email: '',
          Phonenumber: '',
          Price: '',
          Pizza: ''


        }
    }
  static navigationOptions = {
    title: 'Order Page',
    //Sets Header text of Status Bar


  };

  UserRegistrationFunction = () =>{
    fetch("https://pizzaapp-290908.appspot.com/rest/pizzaservice/addorder", 
    {
      method: 'POST',
      headers: {
    //    'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        first_name: this.state.firstname,
    
        last_name: this.state.lastname,
    
        address: this.state.Address,

        email: this.state.Email,

        phonenumber: this.state.Phonenumber,

        price: this.state.Price,

        pizza: this.state.Pizza




    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
            console.log(response);
    
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.textStyle}>FIRST NAME:</Text>
        <TextInput 
        placeholder="Your first name" 
        onChangeText={first_name => this.setState({firstname : first_name})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

        <Text style={styles.textStyle}>LAST NAME:</Text>
        <TextInput 
        placeholder="Your last name" 
        onChangeText={last_name => this.setState({lastname : last_name})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

        <Text style={styles.textStyle}>ADDRESS:</Text>
        <TextInput 
        placeholder="Your address" 
        onChangeText={address => this.setState({Address : address})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

        <Text style={styles.textStyle}>EMAIL:</Text>
        <TextInput 
        placeholder="Your email address" 
        onChangeText={email => this.setState({Email : email})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

        <Text style={styles.textStyle}>PHONE NUMBER:</Text>
        <TextInput 
        placeholder="Your phone number" 
        onChangeText={phonenumber => this.setState({Phonenumber : phonenumber})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

        <Text style={styles.textStyle}>PRICE:</Text>
        <TextInput 
        placeholder="PRICE" 
        onChangeText={price => this.setState({Price : price})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 

      <Text style={styles.textStyle}>PIZZA:</Text>
        <TextInput 
        placeholder="Your pizza" 
        onChangeText={pizza => this.setState({Pizza : pizza})}
          underlineColorAndroid="transparent"
        style={styles.inputStyle}/> 




        <Text>TOTAL PRICE</Text>
        <Text>8.00€</Text>



        <Button title="Order now" onPress={this.UserRegistrationFunction} style={styles.orderButton}/>

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
