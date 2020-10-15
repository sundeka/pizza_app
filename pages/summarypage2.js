import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import {init, addOrder, fetchAllOrders} from '../dbconn/db.js';
import * as SQLite from 'expo-sqlite';


init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

var index=1;
export default function App() {
  const [isInserted, setIsInserted]=useState(false);
  const [orderList, setOrderList]=useState([]);
  const [newPizza, setNewPizza]=useState('');
  const [newPrice, setNewPrice]=useState('');
  const [newRestaurant, setNewRestaurant]=useState('');
  const [newFirstname, setNewFirstname]=useState('');
  const [newLastname, setNewLastname]=useState('');
  const [newEmail, setNewEmail]=useState('');
  const [newPhonenumber, setNewPhonenumber]=useState('');
  const [newAddress, setNewAddress]=useState('');

  const addOrderHandler=()=>{
    setFishList(orderList=>[...orderList, {pizza:newPizza, price:newPrice, restaurant:newRestaurant, first_name:newFirstname, last_name:newLastname, email:newEmail, phonenumber:newPhonenumber, address:newAddress}]);
    saveFish();
  }
  const pizzaInputHandler=(enteredText)=>{
    setNewPizza(enteredText);
  }
  const priceInputHandler=(enteredText)=>{
    setNewPrice(enteredText);
  }
  const restaurantInputHandler=(enteredText)=>{
    setNewRestaurant(enteredText);
  }
  const firstnameInputHandler=(enteredText)=>{
    setNewFirstname(enteredText);
  }
  const lastnameInputHandler=(enteredText)=>{
    setNewLastname(enteredText);
  }
  const emailInputHandler=(enteredText)=>{
    setNewEmail(enteredText);
  }
  const phonenumberInputHandler=(enteredText)=>{
    setNewPhonenumber(enteredText);
  }
  const addressInputHandler=(enteredText)=>{
    setNewAddress(enteredText);
  }

  async function saveOrder(){
    try{
      const dbResult = await addOrder(newPizza, newPrice, newRestaurant, newFirstname, newLastname, newEmail, newPhonenumber, newAddress);
      console.log(dbResult);
    }
    catch(err){
      console.log(err);
    }
    finally{
      setIsInserted(true);
    }
  }
  async function readAllOrders(){
    // await fetchAllFish(newFishBreed, newFishWeight)
    // .then((res)=>{setFishList(res.rows._array)})
    // .catch((err)=>{console.log(err)})
    // .finally(()=>{console.log("All fish are read")});

//The above commented can be used as well as the code below

    try{
      const dbResult = await fetchAllOrders(ewPizza, newPrice, newRestaurant, newFirstname, newLastname, newEmail, newPhonenumber, newAddress);
      console.log("dbResult");

      //Take a look at the stucture of the dbResult printed below
      console.log(dbResult);
      //The structure tells that we have to use dbResult.rows._array
      setOrderList(dbResult.rows._array);
    }
    catch(err){
      console.log(err);
    }
    finally{
      console.log("All orders are red - really?");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder="Pizza" 
                  style={styles.inputStyle} 
                  onChangeText={pizzaInputHandler}
                  value={newPizza}/>  
        <TextInput placeholder="Price" 
                  style={styles.inputStyle} 
                  onChangeText={priceInputHandler}
                  value={newPrice}/>  
        <TextInput placeholder="Restaurant" 
                  style={styles.inputStyle} 
                  onChangeText={restaurantInputHandler}
                  value={newRestaurant}/>  
        <TextInput placeholder="Firstname" 
                  style={styles.inputStyle} 
                  onChangeText={firstnameInputHandler}
                  value={newFirstname}/>  
        <TextInput placeholder="Lastname" 
                  style={styles.inputStyle} 
                  onChangeText={lastnameInputHandler}
                  value={newLastname}/>  
        <TextInput placeholder="Email" 
                  style={styles.inputStyle} 
                  onChangeText={emailInputHandler}
                  value={newEmail}/>  
        <TextInput placeholder="Phonenumber" 
                  style={styles.inputStyle} 
                  onChangeText={phonenumberInputHandler}
                  value={newPhonenumber}/>  
        <TextInput placeholder="Address" 
                  style={styles.inputStyle} 
                  onChangeText={addressInputHandler}
                  value={newAddress}/>  
      </View>    

      <View style={styles.buttoncontainer}>
        <Button title="Add" onPress={addOrderHandler}/>
        <Button title="Read all" onPress={readAllOrders}/>
      </View>
      <View style={styles.flatliststyle}>
      <FlatList 
        // keyExtractor={item=>item.id.toString()}
        keyExtractor={item=>orderList.indexOf(item).toString()}
        data={orderList} 
        renderItem={itemData=>(
          <View style={styles.listItemStyle}>
            <Text>{itemData.item.id}) {itemData.item.pizza}. {itemData.item.price}. {itemData.item.restaurant}. {itemData.item.first_name}. {itemData.item.last_name}. {itemData.item.email}. {itemData.item.phonenumber}. {itemData.item.address}</Text>
          </View>
        )}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  inputcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  buttoncontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  inputStyle:{
    width:200,
    height:50,
    padding:10,
    borderWidth:2,
    borderColor:'#f00',
  },
  listItemStyle: {
    borderWidth: 1, 
    borderColor: 'blue', 
    padding: 5,
    backgroundColor:"#abc",
    marginVertical:5,
  },
  flatliststyle: {
    borderColor:'black',
    borderWidth:2,
    height:'100%',
    width:'80%',
    flex:5,
  },
});
