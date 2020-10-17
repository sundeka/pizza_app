import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button} from 'react-native';
import FirstPage from './pages/Login';
import SecondPage from './pages/Fillings';
import Orderpage from './pages/Orderpage2';
import SignupPage from './pages/Signup';
import Summarypage from './pages/Summarypage';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
  {
    Login: FirstPage,
    Fillings: SecondPage,
    Order: Orderpage,
    Signup: SignupPage,
    Summary: Summarypage,

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


































// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import LoginPage from './pages/Login.js'

// export default function App() {
//   return (
//     <LoginPage/>
//   );
// }



// import React, { Component } from 'react';
// import {View, StyleSheet} from 'react-native'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';

// import SecondPage from './pages/Fillings';
// import FirstPage from './pages/Login';

// const App = createStackNavigator({
//     FirstPage: { screen: FirstPage }, 
//     SecondPage: { screen: SecondPage }, 
//   },
//   {
//     initialRouteName: 'FirstPage',
//   }
// );
// export default createAppContainer(App);




