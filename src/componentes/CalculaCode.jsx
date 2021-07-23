import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default function CalculaCode(){
    return(
       
        
        
        <View style={styles.ViewHeader}>
            <Image style={styles.logo}
            source={require('../../react-logo.png')} />
            <Text style={styles.textHeader}>CalculaCode</Text>
            <Image style={styles.logo}
            source={require("../../calculadora.png")} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    ViewHeader:{
        height: 60,
        backgroundColor: "red",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:"center",
        alignItems:"center"
    },

    textHeader:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 25,
    },

    logo:{
        width: 60,
        height: 60,
        marginRight: 35,
        marginLeft: 35
        // alignItems:"flex-start",
        // justifyContent:"center"
    }
})
