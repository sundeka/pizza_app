import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {init, addOrder, fetchAllOrders} from './dbconn/db.js';
import * as SQLite from 'expo-sqlite';

import Screen2 from './pages/Summarypage';

import Screen1 from './pages/Orderpage2.js';


const App = createStackNavigator({
        Screen1: { screen: Screen1 }, 
        Screen2: { screen: Screen2 }, 
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
  export default createAppContainer(App);




// export default function App() {
//   return(
//     <FrontPage/>
//   )
// }

//  const App = createStackNavigator({
//      FirstPage: { screen: FirstPage }, 
//      SecondPage: { screen: SecondPage }, 
//    },
//    {
//      initialRouteName: 'FirstPage',
//    }
//  );
//  export default createAppContainer(App);