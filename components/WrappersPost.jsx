import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WrapperPost =  ({children}) => { 
    const keyboartHide=()=>{
    Keyboard.dismiss()
  }
   return ( 
 <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboartHide}>
      <ImageBackground style={styles.image}  source={require('../Images/skyline-gf51055a02_640.jpg')}> 
       
      {children}

         <StatusBar style="auto" />
      </ImageBackground>
      </TouchableWithoutFeedback>
    </View> 
   
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1,
    resizeMode:"cover" ,
    justifyContent:"center",
    },  
});

export default WrapperPost