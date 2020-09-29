import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const ReadScreen = () => {
  const [hasError, setErrors] = useState(false);
  const [someError, setSomeErrors] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading]=useState(true);

  async function fetchFish(){
    await fetch("https://mobilelist.appspot.com/rest/fishservice/getAll")//Function returns a value, which is a parameter
    .then(parameter=>parameter.json())//to the next part (parameter). And parameter.json() returns a value, which is a parameter
    .then(anotherParameter=>setMovies(anotherParameter));//to the next (anotherParameter), which is set to movies
  }

  //Another function with different code - e.g. logging and catching errors
  async function fetchFish2(){
    await fetch("https://mobilelist.appspot.com/rest/fishservice/getAll")
    .then(parameter=>parameter.json()
          .catch(err=>{setSomeErrors(err);setErrors(true);console.log("JSON Error: "+err)})
    .then(anotherParameter=>{setMovies(anotherParameter);console.log(anotherParameter)})
    .catch(anError=>{setSomeErrors(anError);console.log(anError)}));
  }

//And the third version with longer code
  async function fetchData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let res = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      res=await fetch("https://mobilelist.appspot.com/rest/fishservice/getAll");
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
  useEffect(() => {
      if (isLoading==true){
        setLoading(false);
        // fetchData();
        // fetchFish();
        fetchFish2();
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
        <NavigationEvents onDidFocus={()=>{setLoading(true)}} />
        <Text>{hasError}</Text>
        <FlatList
            data={movies}
            // data={movies.movies}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                {/* <Text>{item.id}) {item.title}, {item.releaseYear}</Text> */}
                <Text>{item.id}) {item.breed}, {item.weight}</Text>
              </View>
            )}
            keyExtractor={item=>movies.indexOf(item).toString()}
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

export default ReadScreen;