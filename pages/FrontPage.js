import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';

import FetchFillings from '../dbconn/FetchFillings.js';
import PrintResults from '../dbconn/PrintResults.js';

const FrontPage = () => {

    const receiveParams=(fishArr)=>{
        console.log(JSON.stringify(fishArr));
    }

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
                <FetchFillings onAddToppings={receiveParams}/>
            </View>
            <View style={styles.pizzalistdiv}>
                <PrintResults/>
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