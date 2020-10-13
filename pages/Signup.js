import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, StatusBar, Image} from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';




export default class SignupPage extends React.Component{


  
goBack() {
    Actions.pop();
}



constructor(props) {
  super(props);  
  this.state = {
    username: '',
    password: '',
  }
}

saveData =async()=>{
  const {email,password} = this.state;

  //save data with asyncstorage
  let loginDetails={
      email: email,
      password: password
  }

  if(this.props.type !== 'Login')
  {
      AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

      Keyboard.dismiss();
      alert("You successfully registered. Email: " + email + ' password: ' + password);
      this.login();
  }
  else if(this.props.type == 'Login')
  {
      try{
          let loginDetails = await AsyncStorage.getItem('loginDetails');
          let ld = JSON.parse(loginDetails);

          if (ld.email != null && ld.password != null)
          {
              if (ld.email == email && ld.password == password)
              {
                  alert('Go in!');
                 
              }
              else
              {
                  alert('Email and Password does not exist!');
              }
          }

      }catch(error)
      {
          alert(error);
      }
  }
}

showData = async()=>{
  let loginDetails = await AsyncStorage.getItem('loginDetails');
  let ld = JSON.parse(loginDetails);
  alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
}


  render() {   
      return (
        <View style={styles.container}>

     

          <Image 
              source={require('../assets/pizzalogo14.png')} 
              style={{ width: 205, height: 160, marginBottom: 30}}
          />  

          <StatusBar
              backgroundColor="#A32706"
              barStyle="light-content"
          />

          
          <Text style={styles.welcome}> Register to Pizza-app!</Text>

          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}         
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            onSubmitEditing = {() => this.username.focus()}
          />
          
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry   
            ref = {(input) }       
          />

          
          <View style={styles.BtnContainer}>
            {/* <TouchableOpacity 
              style={styles.userBtn} 
              onPress={this._login}
              // onPress={() => this.props.navigation.navigate('Details')}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={styles.userBtn} 
            >
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity> */}

            <TouchableOpacity 
              style={styles.userBtn}
              onPress={this.goBack}
            >
              <Text style={styles.btnTxt}>Already an account?</Text>
            </TouchableOpacity>

            





          </View>  
        </View>
      );
    }

    _login = async() => {
      if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
        // alert('Logged in');
        await AsyncStorage.setItem('isLoggedIn', '1');
        this.props.navigation.navigate('Details');
      } else {
        alert('Username or Password is incorrect');
      } 
      
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


