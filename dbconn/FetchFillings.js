import React, {useState, useEffect} from "react";
import { View, Picker, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';

const FetchFillings = (props) => {
    const [fillings, setFillings] = useState([]);
    const [selectedValue, setSelectedValue] = useState("Select a topping")
    const [selectedFillings, addSelectedFillings] = useState([]);

    async function fetchFillings() {
        await fetch("https://pizzaapp-290908.ew.r.appspot.com/rest/db/getAllToppings")
        .then(parameter=>parameter.json())
        .then(anotherParam=>setFillings(anotherParam));
    };

    const appendList = (item) => {
        setSelectedValue(item);
        if (selectedFillings.includes(item)){
            Alert.alert("No duplicates allowed!", "You have already selected this topping.")
        } else if(item==="Select a topping") {
            return;
        } else {
            addSelectedFillings(selectedFillings=>[...selectedFillings, item]);
        }
    }

    const emptyList = () => {
        props.emptyList();
        addSelectedFillings([]);
        setSelectedValue("Select a topping");
    }

    useEffect(() => {
        fetchFillings();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <Picker selectedValue={selectedValue} onValueChange={(itemValue) => appendList(itemValue)}>
                    {fillings.map((item) => (<Picker.Item key={item.id} color="#851d41" label={item.topping} value={item.topping}/>))}
                </Picker>
            </View>
            
            <View style={styles.fillingsdiv}>
                 {selectedFillings.map((it)=>
                    <Text style={styles.fillingtext}>{it}</Text>
                )}
            </View>
            <View style={styles.buttondiv}>

                <TouchableOpacity style={styles.button} color="#851d41" onPress={()=>props.onAddToppings(selectedFillings)}>
                    <Text style={styles.buttontext}>SEARCH FOR PIZZAS</Text>
                </TouchableOpacity> 

                <Button title="CLEAR LIST" color="#db3056" onPress={emptyList}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:7,
    },
    
    searchbar: {
        flex: 1,
        backgroundColor: '#ff6464',
    },

    fillingsdiv: {
        alignSelf: 'center',
        alignContent: 'stretch',
        backgroundColor: '#db3056',
        width: '100%',
        flex: 2,
        flexWrap: 'wrap',
        paddingTop: '3%',
        paddingLeft: '3%',
        paddingRight: '3%' 
    }, fillingtext: {
        color: '#851d41',
        fontSize: 17,
        fontWeight: 'bold'
    },

    buttondiv: {
        alignSelf: 'center',
        alignContent: 'stretch',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
    }, button: {
        backgroundColor: '#851d41',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '70%',
    }, buttontext: {
        color: 'white'
    }
})

export default FetchFillings;