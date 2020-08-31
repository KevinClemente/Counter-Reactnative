/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
  
class App extends Component{

  constructor(props)  {

    super(props);
    this.state = {counter: 0};

    this.handleup=this.handleup.bind(this);//todas las funciones que utilicen "this" deben bindearlas en el constructor para no tener problemas de contexto 
    this.handledown=this.handledown.bind(this);
                      }
  //funcion
  handledown()  {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
              }   

  handleup()  {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
              }    
   
  
  
  render(){

    const {counter} = this.state; 

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>

          <TouchableOpacity style={styles.btn} onPress={this.handledown}>
            <Text style={styles.btnTxt} >-</Text>
          </TouchableOpacity>

          <View style={styles.CounterContainer}>
            <Text style={styles.Counter}>{counter}</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={this.handleup}>
            <Text style={styles.btnTxt} >+</Text> 
          </TouchableOpacity>  

        </View>  
      </View>//onPres llama la funcion handleup pero si se le pusiera this.handleup() se estaria ejecutando siempre, 
            //en cambio sin parentesis solo cuando se presione el boton

            );}}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent:'center', 
  },

  subcontainer:{
    height: 50,
    width:'100%',
    paddingHorizontal:10,
    flexDirection:'row',
  },

  btn:{
    height:50,
    width:50,
    justifyContent:'center', //alinea el boton
    alignItems:'center', //alinea todo dentro del boton
    backgroundColor:'#ecf0f1',

  },
  btnTxt:{
    fontSize:18,
    color: '#34495e',
    fontWeight: 'bold',
  },
  CounterContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center', 
  }, 
  Counter:{
    fontSize: 40,
    color:'#ecf0f1',
    fontWeight:'bold',
  },

});  
  
export default App;
