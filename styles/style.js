import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content:{
    backgroundColor: "beige",
    height: 840,
    justifyContent: "center",
    alignItems:"center",
    },

    rodape:{
        backgroundColor: "red",
        height: 60,
        justifyContent: "center",
        alignItems:"center",  
    },

    calculadora:{
        height: 750,
        backgroundColor: "black",
        width: 400,
    },

  resultCalc:{
      fontSize: 100,
      color:"white",
      textAlign:"right",
      paddingRight: 20
  },

  botao:{
      width: 90,
      height: 70,
      color:"white",
      margin: 20
     
  },

  textoBotao:{
      color: "white",
      fontSize: 25,
      backgroundColor: "#FE9E09",
      borderRadius: 300,
      padding: 20,
      textAlign:"center",
  },

  valores:{
      width: 170,
      textAlign: "center",
      justifyContent: "center",
      alignItems:"center",
      color: "white",
      fontSize: 50,
  },

  linha:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems:"center",
    marginTop: 10
  },

  linha2:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems:"center",
    marginTop: 10,
  },

  valores1:{
    margin: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    width: 170,
    textAlign: "center",
    justifyContent: "center",
    alignItems:"center",
    color: "white",
    fontSize: 50,
  }
})