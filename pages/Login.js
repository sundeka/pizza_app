import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, StatusBar, Image} from 'react-native';



const userInfo = {username: 'admin', password: 'password'}

class LoginScreen extends Component {
// export default class FirstPage extends Component{
    static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);  
    this.state = {
      username: '',
      password: '',
    };
  }



  render() {   
      return (
        <View style={styles.container}>

      {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />   */}

          {/* <Image 
              source={require('./assets/pizzaa.png')} 
              style={{ width: 200, height: 130 }}
          /> */}

          <Image 
              source={require('../assets/pizzalogo14.png')} 
              style={{ width: 205, height: 160, marginBottom: 30}}
          />  

          <StatusBar
              backgroundColor="#A32706"
              barStyle="light-content"
          />

          {/* <View style={styles.picture}>
              <Image source={require('..assets/pizza.png')} />
          </View>
           */}

          
              
          


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
              // onPress={() => this.props.navigation.navigate('Details')}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.userBtn}
              onPress={() => alert("Sign up Works")}
            >
              <Text style={styles.btnTxt}>Sign up</Text>
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

export default LoginScreen;

