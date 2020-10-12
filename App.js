<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet } from 'react-native';

import FrontPage from './pages/FrontPage.js'

export default function App() {
  return (
    <FrontPage/>
  );
}
=======
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button} from 'react-native';
import FirstPage from './pages/Login';
import SecondPage from './pages/Fillings';
// import SignupPage from './pages/Signup';
// import FirstPage from './pages/Login'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import FirstPage from './pages/Login';



const RootStack = createStackNavigator(
  {
    HomePage: FirstPage,
    //RegisterPage: SignupPage,
    Fillings: SecondPage,

    
    
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#A32706'
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
    backgroundColor: '#A32706',
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



// toimii ylempi koodi





// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import LoginScreen from './src/screens/LoginScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import CreateAccountScreen from './src/screens/CreateAccountScreen';

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Login: LoginScreen,
//     CreateAccount: CreateAccountScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// export default createAppContainer(AppNavigator);











































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




>>>>>>> 2877b9d78c0961ae0f22eb97202a0de44d246f9a
