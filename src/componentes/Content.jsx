import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {styles} from "../../styles/style";

export default function Content(){
    const [state, setState] = useState({
        valorA: "",
        valorB:"",
    })

    const [resultado, setResultado] = useState("0");
    
    const handleInputChange = (nome, valor) => {
        setState({
            ...state, [nome]:valor
        })
    }


    
    return(
        <View style={styles.content}>
            <View style={styles.calculadora}>
                <Text style={styles.resultCalc}>{resultado}</Text>
                <View style={styles.linha}>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado(state.valorA + state.valorB)} ><Text style={styles.textoBotao}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado(state.valorA - state.valorB)}><Text style={styles.textoBotao}>-</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado(state.valorA * state.valorB)}><Text style={styles.textoBotao}>*</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado(state.valorA / state.valorB)}><Text style={styles.textoBotao}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado (state.valorA % state.valorB)}><Text style={styles.textoBotao}>%</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setResultado(Math.pow(state.valorA, state.valorB))}><Text style={styles.textoBotao}>exp</Text></TouchableOpacity> 
                </View>
                <View style={styles.linha2}>
                <TextInput style={styles.valores1} placeholder="Valor A" onChangeText={(valor)=> handleInputChange("valorA", parseInt(valor))} keyboardType="numeric"/>
                <TextInput style={styles.valores1} placeholder="Valor B" onChangeText={(valor)=> handleInputChange("valorB", parseInt(valor))} keyboardType="numeric"/>
                </View>
            </View>
        </View>
    )
}