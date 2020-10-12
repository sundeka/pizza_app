import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, StatusBar, Image, navigation} from 'react-native';

const userInfo = {username: 'admin', password: '123'}

export default class FirstPage extends React.Component{
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

            <TouchableOpacity 
              style={styles.userBtn}
              onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.btnTxt}>Sign up</Text>
            </TouchableOpacity>
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
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  userBtn: {
    backgroundColor: "#851d41",
    padding: 15,
    width: "45%",
  },
  btnTxt: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",   
  }
});