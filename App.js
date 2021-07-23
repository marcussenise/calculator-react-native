import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';
import CalculaCode from './src/componentes/CalculaCode';
import Content from './src/componentes/Content';



export default function App() {
  return (
    <ScrollView>
    <SafeAreaView>
    <StatusBar hidden ={false} backgroundColor = "#00BCD4"></StatusBar> 
    <CalculaCode/>
    <Content/>



    </SafeAreaView>
    </ScrollView>
    
  );
}
