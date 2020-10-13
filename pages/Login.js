import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, StatusBar, Image, navigation} from 'react-native';


const userInfo = {username: 'admin', password: '123'}

export default class FirstPage extends React.Component{
  static defaultProps = {
    name: 'Login'
  }
     

  constructor(props) {
    super(props);  
    this.state = {
      username: '',
      password: '',
    };
  }

  saveData =async()=>{
    const {username,password} = this.state;

    //save data with asyncstorage
    let loginDetails={
        username: username,
        password: password
    }

    if(this.props.name == 'signup')
    {
        AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

        Keyboard.dismiss();
        alert("You successfully registered. Username: " + username + ' password: ' + password);
        this.login();
    }
    else if(this.props.name == 'Login')
    {
        try{
            let loginDetails = await AsyncStorage.getItem('loginDetails');
            let ld = JSON.parse(loginDetails);

            if (ld.username != null && ld.password != null)
            {
                if (ld.username == username && ld.password == password)
                {
                   await AsyncStorage.setItem('isLoggedIn', '1');
                   this.props.navigation.navigate('Fillings');
                }
                else
                {
                    alert('Username and Password does not exist!');
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
    alert('username: '+ ld.username + ' ' + 'password: ' + ld.password);
}

  
  
  render() {   
      return (
        <View style={styles.container}>
          
          <Image 
              source={require('../assets/pizzalogo14.png')} 
              style={{ width: 205, height: 160, marginTop: 30, marginBottom: 30}}
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
            placeholderTextColor = "#fff"
            onSubmitEditing={()=> this.password.focus()}
          />
          
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry   
            placeholderTextColor = "#fff"  
            ref={(input) => this.password = input}    
          />
   
          <View style={styles.BtnContainer}>
            <TouchableOpacity 
              style={styles.userBtn} 
              onPress={this.saveData}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>

            
          </View>  

          <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this._Signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
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

    _Signup = async() => {
      this.props.navigation.navigate('Signup');
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
    borderRadius: 30,
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
    borderRadius: 30,
  },
  btnTxt: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",   
  },
  signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
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



