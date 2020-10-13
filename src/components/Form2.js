import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, AsyncStorage, Keyboard
} from 'react-native';

export default class Form extends Component {


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
    
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    
            Keyboard.dismiss();
            alert("You successfully registered. Username: " + username + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
    
                if (ld.username != null && ld.password != null)
                {
                    if (ld.username == username && ld.password == password)
                    {
                       alert('Loggen in!');
                       
                        
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



	render(){
		return(
			<View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Username"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
			)
	}
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
    
      inputBox: {
        width:300,
        backgroundColor:'#851d41',
        borderRadius: 20,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
      },
      button: {
        width:300,
        backgroundColor:'#851d41',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
  
});