import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button} from 'react-native';
import FirstPage from './pages/Login';
import SecondPage from './pages/Fillings';
import Orderpage from './pages/Orderpage2';
import SignupPage from './pages/Signup';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
  {
    Login: FirstPage,
    Fillings: SecondPage,
    Order: Orderpage,
    Signup: SignupPage,

  },
  {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#db3056'
        },
        hearedTintColor: '#fff',
        hearedTitleStyle: {
          textAlign: 'center',
          flex: 1
        }
    }
  },
);

const AuthStack = createStackNavigator({Home: FirstPage})

class AuthLoadingScreen extends Component{
  constructor(props){
    super(props)
    this._loadData();
  }

  render() {
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
  _loadData = async() => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db3056',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }

));