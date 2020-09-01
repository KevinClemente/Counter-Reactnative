import React ,{Component} from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';



class Button extends Component
{
    render(){

        const{label, action} = this.props;  // aca lo que hace es del objeto props obtiene el parametro que se llama label(la etiqueta del boton) y la action,
                                            // si esto no se hiciera en el text que se ha puesto label deberia ir el {this.props.label}
        return  (
            <TouchableOpacity style={styles.btn} onPress={action}>  
            
            <Text style={styles.btnTxt} >{label}</Text> 
            </TouchableOpacity>
                );

            }//para no estar creando 2 componentes uno para mas y otro para menos hacemos uso de props
}

const styles = StyleSheet.create({
  
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
  
  });  

export default Button;