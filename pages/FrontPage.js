import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';

import FetchFillings from '../dbconn/FetchFillings.js';

const FrontPage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.logo}>LOGO</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.titlediv}>
                <Text style={styles.titletext}>SELECT YOUR TOPPINGS</Text>
            </View>
            <View style={styles.decisions}>
                <FetchFillings/>
            </View>
            <View style={styles.titlediv}>
                <Text style={styles.titletext}>RECOMMENDED PIZZAS</Text>
            </View>
            <View style={styles.pizzalistdiv}>

                <View style={styles.pizzaitem}>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Tuna pizza</Text>
                    </View>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Kotipizza</Text>
                    </View>
                    <View style={styles.pizzaprice}>
                        <Text style={styles.pricetext}>6,50€</Text>
                    </View>
                </View>

                <View style={styles.pizzaitem}>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Tuna special</Text>
                    </View>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Ahmedin Kebab</Text>
                    </View>
                    <View style={styles.pizzaprice}>
                        <Text style={styles.pricetext}>7,20€</Text>
                    </View>
                </View>

                <View style={styles.pizzaitem}>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Tuna-jalapeno</Text>
                    </View>
                    <View style={styles.pizzainfo}>
                        <Text style={styles.infotext}>Pizza Hut</Text>
                    </View>
                    <View style={styles.pizzaprice}>
                        <Text style={styles.pricetext}>8,00€</Text>
                    </View>
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
        fontSize: 30, //POISTA
        color: '#851d41', //POISTA
    },

    content: {
        flex: 10,
        backgroundColor: '#ffae8f'
    },

    titlediv: {
        backgroundColor: '#ffae8f',
        justifyContent: 'center',
        flex: 1,
    }, titletext: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#851d41'
    },

    decisions: {
        backgroundColor: '#ff6464',
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
    }, pizzaitem: {
        backgroundColor: '#ff6464',
        height: '30%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }, pizzainfo: {
        width: '50%'
    }, pizzaprice: {
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },

    infotext: {
        paddingLeft: 20,
        fontSize: 15,
        color: '#851d41',
        fontWeight: 'bold'
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