import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import WrapperPost from '../../components/WrappersPost';
import { Camera } from "expo-camera";
import { useState, useEffect } from 'react';
import * as Location from "expo-location";

const CreatePostScreen = ({ navigation }) => {
   const [camera, setCamera] = useState(null)
   const [photo, setPhoto] = useState(null)
   const [location, setLocation] = useState(null);

   const takeFoto = async () => {
      const photoMy = await camera.takePictureAsync()
      const location = await Location.getCurrentPositionAsync({});
      setPhoto(photoMy.uri)
      setLocation(location)
   }
   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            console.log("Permission to access location was denied");
         }

      })();
   }, []);

   const sendPhoto = () => {
      navigation.navigate("DefaultScreen", { photo, location });
   }
   return (

      <WrapperPost>
         <View style={styles.cointeiner}>
            <Camera style={styles.camera} ref={setCamera}>

               {photo && (
                  <View style={styles.takePhotoCointainer}>
                     <Image source={{ uri: photo, width: "100%", height: "100%" }} />
                  </View>
               )}

               <TouchableOpacity onPress={takeFoto} style={styles.snapCointeiner}>
                  <Text style={styles.text}>Snap</Text>
               </TouchableOpacity>
            </Camera>
            <View style={styles.cointainerSendBtn}>
               <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
                  <Text style={styles.textBtn}>Send</Text>
               </TouchableOpacity>
            </View>
         </View>
      </WrapperPost>

   )
}
const styles = StyleSheet.create({
   cointeiner: {
      flex: 1,
   },
   camera: {
      flex: 1,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "flex-end",

   },
   snapCointeiner: {
      width: 70,
      height: 70,
      borderWidth: 1,
      borderColor: "red",
      marginTop: 200,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: "gray",
   },
   takePhotoCointainer: {
      position: "absolute",
      top: 50,
      left: 90,
      borderWidth: 1,
      borderColor: "red",
      width: 200,
      height: 300,
      backgroundColor: "green",
      padding: 25,

   },
   text: {
      color: "red"
   },
   cointainerSendBtn: {
      backgroundColor: "black",
      alignItems: "center"
   },
   sendBtn: {
      marginHorizontal: 20,
      height: 40,
      width: 70,
      borderWidth: 2,
      borderColor: "blue",
      backgroundColor: "#5f9ea0",
      borderRadius: 10,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
      
   },
   textBtn:{
      color:"#7fff00",
      fontSize:20
   }
})

export default CreatePostScreen