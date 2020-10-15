import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';



export default class Screen2 extends Component {
  
    render(){
        



        return(




            <View style = { styles.MainContainer }>

                 <Text></Text>
                <Text style={styles.titleText}>Your order will be ready soon:</Text>
    <CountDown
        until={60 * 15 + 0}
        size={45}
        onFinish={() => alert('Your order is ready!')}
        digitStyle={{backgroundColor: '#FFAE8F'}}
        digitTxtStyle={{color: '#851D41'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        separatorStyle={{color: '#851D41'}}
        showSeparator

      />
                <Text style={styles.titleText}>Order summary:</Text>
                <Text></Text>
                <Text style={styles.titleBold}>Pizza: </Text>
                <Text>{this.props.navigation.state.params.Pizza}</Text>
                <Text style={styles.titleBold}>Restaurant: </Text>
                <Text>{this.props.navigation.state.params.Restaurant}</Text>
                <Text style={styles.titleBold}>Total price: </Text>
                <Text>{this.props.navigation.state.params.Price}€</Text>
                <Text></Text>
                <Text style={styles.titleText}>Orderer information:</Text>
                <Text></Text>

                <Text style={styles.titleBold}>Full name: </Text>
                <Text>{this.props.navigation.state.params.Firstname} {this.props.navigation.state.params.Lastname}</Text>
                <Text style={styles.titleBold}>Email address: </Text>
                <Text>{this.props.navigation.state.params.Email}</Text>
                <Text style={styles.titleBold}>Phonenumber: </Text>
                <Text>{this.props.navigation.state.params.Phone}</Text>
                <Text style={styles.titleBold}>Address: </Text>
                <Text>{this.props.navigation.state.params.Address}</Text>


                
                    
                   
            </View>
        )
    }

    

  }
  const styles = StyleSheet.create(
    {
      MainContainer:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        backgroundColor:'#FFAE8F',
  
      },
     
        TextInputStyleClass:
        {
    
          textAlign: 'center',
          height: 40,
          backgroundColor : "#851D41",
          borderWidth: 2.5,
          borderColor: 'black',
          borderRadius: 2 ,
          marginBottom: 15,
          width: '95%',
        
        },
     
        TouchableOpacityStyle:
       {
          paddingTop:10,
          paddingBottom:10,
          marginBottom: 20,
          width: '50%'
     
        },
     
        titleText:
        {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#851D41',
        },
        titleBold:
        {
            fontWeight: 'bold'
        },
        textTest:
        {
            paddingBottom: 15,
        },
        FontStyle:
        {
           color: '#fff',
            textAlign: 'center',
            fontSize: 25
        },
    
        ActivityIndicatorStyle:{
          
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        
      }
    });

  