import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './pages/Login';
import DetailsScreen from './pages/Details';


const RootStack = createStackNavigator(
  {
    //HomePage: HomeScreen,
    Details: DetailsScreen
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#1e90ff'
        },
        hearedTintColor: '#fff',
        hearedTitleStyle: {
          textAlign: 'center',
          flex: 1
        }
    }
  },
);
const AuthStack = createStackNavigator({Home: HomeScreen})

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
      this.props.navigation.navigate(inLoggedIn !== '1'? 'Auth' : 'App');
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








