import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import SecondPage from './pages/Orderpage';
import Summarypage from './pages/Summarypage';

import FrontPage from './pages/Orderpage2.js';
//import FrontPage from './pages/Summarypage.js'

export default function App() {
  return(
    <FrontPage/>
  )
}

//  const App = createStackNavigator({
//      FirstPage: { screen: FirstPage }, 
//      SecondPage: { screen: SecondPage }, 
//    },
//    {
//      initialRouteName: 'FirstPage',
//    }
//  );
//  export default createAppContainer(App);