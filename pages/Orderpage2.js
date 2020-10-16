import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Alert, TouchableOpacity, StatusBar, setState} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




export default class Screen1 extends Component {
constructor(props)
  {
    super(props);
    this.state = {
      PizzaName: 'Special Secret Pizza',
      PricePrice: 9.97,
      RestauRant: 'Pizza Kebab Pentti',
      FirstName: '',
      LastName: '',
      EmailEmail: '',
      PhoneNumber: '',
      AddRess: '', 
    };
    
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
  
         //Alert.alert(responseJson);



         //Alert.alert('Error:', error.message)


  
        }).catch((error) => {
          console.error(error);
        });
}

  render() {

    return (
      
<View style = { styles.MainContainer } >

{/* <StatusBar
              backgroundColor="#851d41"
              barStyle="dark-content"
          /> */}

        <Text style={styles.titleText} >Fill your info</Text>
        <Text></Text>
        <Text style={styles.titleBold}>Your Pizza: </Text>
        <Text style={styles.textTest}>{this.state.PizzaName}</Text>
        <Text style={styles.titleBold}>Total price: </Text>
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

<Button 
        
        title='Click Here To Order' 
        color='#851D41'
        onPress={()=>{
          this.OrderFunction(); this.props.navigation.navigate('Screen2',  
          {
          Pizza: this.state.PizzaName,
          Price: this.state.PricePrice,
          Restaurant: this.state.RestauRant,
          Firstname: this.state.FirstName,
          Lastname: this.state.LastName,
          Email: this.state.EmailEmail,
          Phone: this.state.PhoneNumber,
          Address: this.state.AddRess
        });}}

         
        />

        {/* <Button 
        
        title='Click Here To Order' 
        color='#851D41'
        onPress={()=> 
          this.props.navigation.navigate('Screen2',  
        {
        Pizza: this.state.PizzaName,
        Price: this.state.PricePrice,
        Restaurant: this.state.RestauRant,
        Firstname: this.state.FirstName,
        Lastname: this.state.LastName,
        Email: this.state.EmailEmail,
        Phone: this.state.PhoneNumber,
        Address: this.state.AddRess
        })}  
        /> */}

        
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

