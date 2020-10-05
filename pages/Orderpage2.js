import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
export default class Project extends Component {
constructor() {
    super()
    this.state = {
      PizzaName: '',
      PricePrice: '',
      FirstName: '',
      LastName: '',
      EmailEmail: '',
      PhoneNumber: '',
      AddRess: ''
    }
  }
  OrderFunction = () =>{
  fetch("https://pizzaapp-290908.appspot.com/rest/pizzaservice/addorder",
   {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      pizza: this.state.PizzaName,
  
      price: this.state.PricePrice,
  
      firstname: this.state.FirstName,

      lastname: this.state.LastName,
      email: this.state.EmailEmail,
      phonenumber: this.state.PhoneNumber,
      address: this.state.AddRess
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
}
  render() {
    return (
<View style = { styles.MainContainer } >
        <Text>Fill your info</Text>
  
        <TextInput
          placeholder='Enter Pizza Name'
          onChangeText={pizza => this.setState({PizzaName : pizza})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          />
        <TextInput
          placeholder='Enter Price'
          onChangeText={price => this.setState({PricePrice : price})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
        <TextInput
          placeholder='Enter First Name'
          onChangeText={firstname => this.setState({FirstName : firstname})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
          <TextInput
          placeholder='Enter Last Name'
          onChangeText={lastname => this.setState({LastName : lastname})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
          <TextInput
          placeholder='Enter Email'
          onChangeText={email => this.setState({EmailEmail : email})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
          <TextInput
          placeholder='Enter Phone Number'
          onChangeText={phonenumber => this.setState({PhoneNumber : phonenumber})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
          <TextInput
          placeholder='Enter Address'
          onChangeText={address => this.setState({AddRess : address})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          />
        <Button title='Click Here To Order' onPress={this.OrderFunction} color='#2196F3' />
      
  
</View>
            
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
   
      TextInputStyleClass:
      {
  
        textAlign: 'center',
        height: 40,
        backgroundColor : "#fff",
        borderWidth: 2.5,
        borderColor: 'black',
        borderRadius: 2 ,
        marginBottom: 15,
        width: '95%'
      },
   
      TouchableOpacityStyle:
     {
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#009688',
        marginBottom: 20,
        width: '90%'
   
      },
   
      TextStyle:
      {
          fontSize: 18
      },
      FontStyle:
      {
         color: '#fff',
          textAlign: 'center',
          fontSize: 25
      },
  
      ActivityIndicatorStyle:{
        
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      
    }
  });
