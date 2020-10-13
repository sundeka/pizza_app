import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, StatusBar, Image, navigation} from 'react-native';
import {Actions} from 'react-native-router-flux';

const userInfo = {username: 'admin', password: '123'}

export default class FirstPage extends React.Component{
     

  constructor(props) {
    super(props);  
    this.state = {
      username: '',
      password: '',
    };
  }

  signup() {
		Actions.signup2()
  }
  
  render() {   
      return (
        <View style={styles.container}>
          <Image 
              source={require('../assets/pizzalogo14.png')} 
              style={{ width: 205, height: 160, marginBottom: 30}}
          />  

          <StatusBar
              backgroundColor="#851d41"
              barStyle="light-content"
          />

          <Text style={styles.welcome}> Login to Pizza-app!</Text>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}         
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
          />
          
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry          
          />
   
          <View style={styles.BtnContainer}>
            <TouchableOpacity 
              style={styles.userBtn} 
              onPress={this._login}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>

            
          </View>  

          <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>

        </View>
      );
    }

    _login = async() => {
      if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
        await AsyncStorage.setItem('isLoggedIn', '1');
        this.props.navigation.navigate('Fillings');
      } else {
        alert('Username or password is incorrect.');
      }  
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffae8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#851d41',
    marginBottom: 30,
  },
  input: {
    width: "90%",
    backgroundColor: "#851d41",
    padding: 15,
    marginBottom: 10,
    fontSize: 15,
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "35%",
    
  },
  userBtn: {
    backgroundColor: "#851d41",
    padding: 15,
    width: "100%",
  },
  btnTxt: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",   
  },
  signupTextCont : {
  	
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'flex-end',
  },
  signupText: {
  	color:'#851d41',
  	fontSize:16
  },
  signupButton: {
  	color:'#851d41',
  	fontSize:16,
  	fontWeight:'500'
  }
});


// ylempi koodi toimii



