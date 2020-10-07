import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const PrintResults = () => {
    const [selectedId, setSelectedId] = useState(1) //uus

    const Item = ({ item, onPress, style }) => ( //uus
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
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.flatliststyle}>
                <FlatList
                    data={menus}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    flatliststyle: {
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
});

export default PrintResults;