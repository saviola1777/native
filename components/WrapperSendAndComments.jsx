import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WrapperSendAndComments =  ({children}) => { 
    const keyboartHide=()=>{
    Keyboard.dismiss()
  }
   return ( 
 <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboartHide}>
      <ImageBackground style={styles.image} source={require('../Images/abstract-g5dbbef740_640.jpg')}> 
      
      {children}

         <StatusBar style="auto" />
      </ImageBackground>
      </TouchableWithoutFeedback>
    </View> 
   
)}
const styles = StyleSheet.create({
  container: {
    height:80,
  },
  image:{
    flex:1,
    flexDirection: "row",
    resizeMode:"cover" ,
    justifyContent:"center",
    alignItems:"center",
  
    },  
});

export default WrapperSendAndComments 