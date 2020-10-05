import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet, Alert, ActivityIndicator} from 'react-native';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [fishList, setFishList] = useState([]);
  const [isLoading, setLoading]=useState(true);


  async function addData() {
    const response = await fetch("https://pizzaapp-290908.appspot.com/rest/pizzaservice/addorder",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        pizza:'Pizza1', 
        price:'10.03', 
        //first_name: 'Eero', 
       // last_name: 'Salminen', 
      //  email: 'eero.eero@hotmail.com', 
      //  phonenumber: '050345000', 
      //  address: 'Pentinkuja 111'
      })
    });

    const responseData = await response.json();
    console.log(responseData);
    setFishList(fishList=>[...fishList, responseData]);
  }

  useEffect(() => {
    if (isLoading==true){
      setLoading(false);
      addData();
    }
  });

  if (isLoading==true) {
    return (
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  else{
    return (
      <View style={{marginTop:50}}>
        <Text>Some new content</Text>
        <FlatList
            data={fishList}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text>{item.id}) {item.pizza}, {item.price}, {item.address}, {item.email}, {item.first_name}, {item.last_name}, {item.phonenumber}</Text>
              </View>
             //       <View style={styles.listItem}>
              //      <Text>{item.id}) {item.pizza}, {item.price}</Text>
              //    </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
};



const styles=StyleSheet.create({
  listItem:{
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#fce',    
  }
});
export default App;