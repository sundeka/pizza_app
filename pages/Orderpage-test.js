import React, { Component } from "react";
import {View, Text, FlatList, StyleSheet, Alert, ActivityIndicator, Button, setState} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default class Screen1 extends Component{
  constructor(props)
  {
    super(props);
    this.state={pizzaname:''};
  }
  render(){
    return(
      <View>
        <TextInput
        placeholder="Enter Pizza"
        onChangeText={pizzaname=>this.setState({pizzaname})}
        />
        <Button
        title='Paina'
        onPress={()=>this.props.navigation.navigate('Screen2', {P1: this.state.pizzaname})}
        />
      </View>
    )
  }
}