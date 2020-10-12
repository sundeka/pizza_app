import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity, FlatList, Image } from 'react-native';

import FetchFillings from '../dbconn/FetchFillings.js';

const FrontPage = () => {
    const [menus, setMenus] = useState([]); //tähän tallentuu koko menu mistä valitaan käyttäjän täytteisiin sopivat pizzat
    const [selectedId, setSelectedId] = useState(null)
    const [ehdotusLista, setEhdotusLista] = useState([]); //tallenna tähän pizzat jotka sopii käyttäjän valitsemiin täytteisiin

    const updateStatus = ( id, rest, pizza, price ) => {
        setSelectedId(id)
        console.log("Selected restaurant: "+rest+"\nSelected pizza: "+pizza+"\nPrice of pizza: "+price+"\n")
    };

     const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.itemi, style}>
            <Text style={styles.infotext}>{item.restaurant}</Text>
            <Text style={styles.infotext}>{item.pizzaname}</Text> 
            <Text style={styles.pricetext}>{item.price}€</Text>
        </TouchableOpacity>
    ); 

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#c44747" : "#ff6464";

        return (
            <Item
                item={item}
                onPress={() => updateStatus(item.id, item.restaurant, item.pizzaname, item.price)}
                style={{ backgroundColor }}
                key={item.id}
            />
        )
    }

    const emptyList = () => {
        setSelectedId(null);
        setEhdotusLista([]);
    }
    

    //replaceAll-metodi jota käytetään hakualgoritmissa
    function replaceAll(string, search, replace) {
        string = string.toLowerCase();
        return string.split(search).join(replace);
    }
 
    async function fetchMenus(syote) {
        await fetch("https://pizzaapp-290908.ew.r.appspot.com/rest/db/getAllMenus")
        .then(parameter=>parameter.json())
        .then(anotherParam=>setMenus(anotherParam));

        //
        //Hakualgoritmi
        //

        setEhdotusLista([]); //tyhjennetään lista joka kerta kun "Search for pizzas" -painiketta painetaan

        for (var i=0;i<menus.length;i++){

            //luetaan kaikki täytteet yhteen stringiin, poistetaan null-arvot replaceAll-metodilla
            var pizzanTaytteet = "";
            pizzanTaytteet = menus[i].tayte1 + menus[i].tayte2 + menus[i].tayte3;
            pizzanTaytteet = replaceAll(pizzanTaytteet, 'null', '')

            //luetaan kaikki syötetyt hakuparametrit yhteen stringiing, poistetaan tyhjät arvot replaceAll-metodilla
            var syotteet="";
            for (var j=0; j<syote.length;j++){
                syotteet+=syote[j];
            }
            syotteet = replaceAll(syotteet, 'null', '');

            //jos pizza X sisältää kaikki käyttäjän syöttämät täytteet, se listataan sovellukseen
            if (pizzanTaytteet.includes(syotteet)){
                setEhdotusLista(ehdotusLista=>[...ehdotusLista, menus[i]]);
            }
        }
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
            <Image source={require('../assets/pizza10.png')}
            style={styles.logo}/>
        </View>
        <View style={styles.content}>
            <View style={styles.titlediv}>
                <Text style={styles.titletext}>SELECT YOUR TOPPINGS</Text>
            </View>
            <View style={styles.decisions}>
                <FetchFillings onAddToppings={fetchMenus} emptyList={emptyList}/>
            </View>
            <View style={styles.pizzalistdiv}>
                 <View style={styles.flatliststyle}>
                     <FlatList
                        data={ehdotusLista}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />    
                </View> 
            </View>
            <View style={styles.buttondiv}>
                <Button 
                    style={styles.buttonstyle}
                    title="CHOOSE SELECTED"
                    color="#851d41"
                />
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffae8f',
        paddingTop: 25,
        height: '100%',
    },

    topBar: {
        flex: 1,
        backgroundColor: '#db3056',
        justifyContent: 'center',
    }, logo: {
        alignSelf: 'center',
        height: '80%',
        resizeMode: 'contain'
    },

    content: {
        flex: 10,
        //backgroundColor: '#ffae8f'
    },

    titlediv: {
        backgroundColor: '#ffae8f',
        justifyContent: 'center',
        flex: .75,
    }, titletext: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#851d41'
    },

    decisions: {
        width: '90%',
        alignSelf: 'center',
        flex: 3,
        justifyContent: 'center'
    },

    pizzalistdiv: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#db3056',
        flex: 4,
        padding: '3%'
    }, flatliststyle: {
        backgroundColor: '#ff6464',
        height: '100%',
    }, itemi: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#851d41',
    },

    infotext: {
        fontSize: 20,
        color: '#851d41',
        fontWeight: 'bold',
        alignSelf: 'center'
    }, pricetext: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#851d41',
        alignSelf: 'center'
    },

    buttondiv: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
    }, buttonstyle: {
        alignSelf: 'center',
    }

});

export default FrontPage;