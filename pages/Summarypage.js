import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet, Alert, ActivityIndicator} from 'react-native';


const App = () => {
  const [hasError, setErrors] = useState(false);
  const [someError, setSomeErrors] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading]=useState(true);
  const [userID, setUserId] = useState[null];
  



//And the third version with longer code and normal single function calls.
  async function fetchData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let res = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      res=await fetch("https://pizzaapp-290908.appspot.com/rest/pizzaservice/getOrders");
    }
    catch(error){
      setErrors(true);
    }

    try{
      //Getting json from the response
      const responseData = await res.json();
      console.log(responseData);//Just for checking.....
      setMovies(responseData);
    }
    catch(err){
      setErrors(true);
      setSomeErrors("ERROR: "+hasError+ " my error "+err);
      console.log(someError);
    }
  }

  //This is called every time the view is rendered
  //The new calls of fetchData (and others) must be stopped somehow, because in
  //those methods are statevariables set, which cause a new re-render.
  useEffect(() => {
      if (isLoading==true){
      setLoading(false);
      fetchData();
      // fetchFish();
      // fetchFish2();
    }
  });

  //If the 'fetch' is not ready yet, an activityindicator is shown
  if (isLoading==true) {
    return (
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  //If errors
  else if(hasError){
    return(
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <Text>{hasError}</Text>
        <Text>{""+someError}</Text>
      </View>
    );
  }
  //Otherwise the list is shown
  else{
    return (
      <View style={{marginTop:50}}>
        <Text>{hasError}</Text>
        <Text>Tässä on yhteenveto tilauksestasi [name]</Text>
        <Text>Valitsemasi pizza: [pizza]</Text>
        <FlatList
            data={movies}
            
            // data={movies.movies}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                {/* <Text>{item.id}) {item.title}, {item.releaseYear}</Text> */}
                <Text>Valitsemasi pizza: {item.pizza}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
        <Text>Hinta: [price]</Text>
        <Text>Tilaajan tiedot:</Text>
        <Text>Etunimi:</Text>
        <Text>Sukunimi:</Text>
        <Text>Sähköposti:</Text>
        <Text>Osoite:</Text>
        <Text>Puhelinnumero:</Text>

        <FlatList
            data={movies}
            
            // data={movies.movies}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                {/* <Text>{item.id}) {item.title}, {item.releaseYear}</Text> */}
                <Text>{item.id}) {item.pizza}, {item.price}, {item.firstname}, {item.lastname}, {item.email}, {item.phonenumber}, {item.address}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
};

const styles=StyleSheet.create({
  listItem:{
    padding: 2,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#FFFFF0',    
  }
});

export default App;