import React, {useState, useEffect} from "react";
import { View, Picker, Text, StyleSheet, Alert } from 'react-native';

const FetchFillings = () => {
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
            console.log("toimi")
        } else {
            addSelectedFillings(selectedFillings=>[...selectedFillings, item]);
        }
    }

    useEffect(() => {
        fetchFillings();
    });

    return(
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <Picker selectedValue={selectedValue} onValueChange={(itemValue) => appendList(itemValue)}>
                    {fillings.map((item) => (<Picker.Item color="#851d41" label={item.topping} value={item.topping}/>))}
                </Picker>
            </View>
            
            <View style={styles.fillingsdiv}>
                 {selectedFillings.map((it)=>
                    <Text style={styles.fillingtext}>{it}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:3,
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
})

export default FetchFillings;