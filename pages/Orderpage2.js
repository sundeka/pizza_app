import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, TouchableOpacity, StatusBar} from 'react-native';
export default class Project extends Component {
constructor() {
    super()
    this.state = {
      PizzaName: 'Special Secret Pizza',
      PricePrice: 9.97,
      RestauRant: 'Pizza Kebab Pentti',
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
      restaurant: this.state.RestauRant,
      firstname: this.state.FirstName,
      lastname: this.state.LastName,
      email: this.state.EmailEmail,
      phonenumber: this.state.PhoneNumber,
      address: this.state.AddRess
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
         Alert.alert(responseJson);



         //Alert.alert(JSON.stringify(responseJson));

  
        }).catch((error) => {
          console.error(error);
        });
}

  render() {

    return (
      
<View style = { styles.MainContainer } >

<StatusBar
              backgroundColor="#851d41"
              barStyle="dark-content"
          />

        <Text style={styles.titleText} >Fill your info</Text>
        <Text></Text>
        <Text style={styles.titleBold}>Our Pizza: </Text>
        <Text style={styles.textTest}>{this.state.PizzaName}</Text>
        <Text style={styles.titleBold}>Tolta price: </Text>
        <Text style={styles.textTest}>{this.state.PricePrice} €</Text>
        <Text style={styles.titleBold}>Restaurant: </Text>
        <Text style={styles.textTest}>{this.state.RestauRant}</Text>
        {/* <TextInput
          placeholder='Enter Pizza Name'
          onChangeText={pizza => this.setState({PizzaName : pizza})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          /> */}
        {/* <TextInput
          placeholder='Enter Price'
          onChangeText={price => this.setState({PricePrice : price})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }

          /> */}
        <TextInput
          placeholder='Enter First Name'
          onChangeText={firstname => this.setState({FirstName : firstname})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          placeholderTextColor='#ffffff'

          />
          <TextInput
          placeholder='Enter Last Name'
          onChangeText={lastname => this.setState({LastName : lastname})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          placeholderTextColor='#ffffff'

          />
          <TextInput
          placeholder='Enter Email'
          onChangeText={email => this.setState({EmailEmail : email})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          placeholderTextColor='#ffffff'

          />
          <TextInput
          placeholder='Enter Phone Number'
          onChangeText={phonenumber => this.setState({PhoneNumber : phonenumber})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          placeholderTextColor='#ffffff'
          

          />
          <TextInput
          placeholder='Enter Address'
          onChangeText={address => this.setState({AddRess : address})}
          underlineColorAndroid='transparent'
          style = { styles.TextInputStyleClass }
          placeholderTextColor='#ffffff'

          />
<TouchableOpacity style = { styles.TouchableOpacityStyle }>

        <Button title='Click Here To Order' onPress={()=> this.props.navigation.navigate('Summarypage'), this.OrderFunction} color='#851D41' />
        </TouchableOpacity>
  
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
      margin: 0,
      backgroundColor:'#FFAE8F',

    },
   
      TextInputStyleClass:
      {
  
        textAlign: 'center',
        height: 40,
        backgroundColor : "#851D41",
        borderWidth: 2.5,
        borderColor: 'black',
        borderRadius: 2 ,
        marginBottom: 15,
        width: '95%',
      
      },
   
      TouchableOpacityStyle:
     {
        paddingTop:10,
        paddingBottom:10,
        marginBottom: 20,
        width: '50%'
   
      },
   
      titleText:
      {
          fontSize: 25,
          fontWeight: 'bold',
          color: '#851D41',
      },
      titleBold:
      {
          fontWeight: 'bold'
      },
      textTest:
      {
          paddingBottom: 15,
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
