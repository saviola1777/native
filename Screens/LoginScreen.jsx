
import React, { useState } from "react";
import { Text, View, TextInput , StyleSheet,TouchableOpacity,Button} from 'react-native';
import Wrapper from "../components/Wrapper";
const initialState={
   email:"",
   password:"",
}
     const LoginScreen =  ({navigation}) => { 
      const [state, setName] = useState(initialState);
      console.log(state)
    
     
      return ( 
        <Wrapper>
      <View style={styles.form}>
         <Text style={styles.title}>Log in</Text>

    <View style={styles.tumb}>
      <TextInput style={styles.input}  placeholder="E-mail" placeholderTextColor="#ffffff" value={state.email}
       onChangeText={(value)=>setName(prevState=>({...prevState , email:value}))}/>
      </View>

      <View style={styles.tumb} >
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ffffff" secureTextEntry={true} value={state.password}
      onChangeText={(value)=>setName(prevState=>({...prevState , password:value}))}/>
      
      </View>

      <TouchableOpacity onPress={() =>navigation.navigate("Home")}  style={styles.btn} activeOpacity={0.8} >
        <Text style={styles.btnTitle}>To come in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate("Registration")}  style={{marginTop:20 , alignItems:"center" }} activeOpacity={0.5}>
          <Text style={{color:"#fff" }}>
          Don't have an account yet?{""}
         <Text style={{fontSize:20 ,color:"#7fff00"}}>Registration</Text>
         </Text>
          </TouchableOpacity>
      
    </View>
    
    </Wrapper>
   )}
   
   const styles = StyleSheet.create({
      title:{
        marginBottom:10,
        textAlign:"center",
        fontSize:30,
        color:"#2f4f4f",
        fontWeight:"700"
        },
        form:{
         marginHorizontal:40,
         
      },
      tumb:{
marginTop:15
      },
        imputText:{
          color:"#1a1a1a",
           fontSize:18,
           marginBottom:10
        },
       
      input:{
        borderWidth:3 ,
        borderColor:"#dbfff4",
        padding:2  ,
        borderRadius:5 ,
        backgroundColor: "#393e40",
        color:"#dbfff4" ,
        textAlign: 'center',
        fontSize:15 ,
        
      },
      btn:{
        
        height:40,
        marginTop:30,
        marginBottom:30,
        borderRadius:5,
          justifyContent: 'center',
          alignItems: 'center',
          ...Platform.select({
            android:{
              backgroundColor:"#f8f8ff",
            
            },
          })
      },
      btnTitle:{
        fontSize:16,
        color:"#00bfff",
      
      },
  
   })
   export default LoginScreen