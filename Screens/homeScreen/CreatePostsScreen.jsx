import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import WrapperSendAndComments from '../../components/WrapperSendAndComments';
import { Camera, CameraType } from "expo-camera";
import { useState, useEffect} from 'react' 
import { useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from "expo-location";
import firebase from '../../firebase/config';
import { useIsFocused } from '@react-navigation/native';


const CreatePostScreen = ({ navigation }) => {

   const [camera, setCamera] = useState(null)
   const [photo, setPhoto] = useState(null)
   const [location, setLocation] = useState(null);
   const [type, setType] = useState(CameraType.back);
   const [comment, setComment] = useState("")
   const [hasPermission, setHasPermission] = useState(null);
   
   const isFocused = useIsFocused();
  const { userId , nickName} =useSelector(store=>store.auth)

   useEffect(() => {
      (async () => {

         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            console.log("Permission to access location was denied");
         }
      })
   }, []);

   const takeFoto = async () => {
      const myPhoto = await camera.takePictureAsync()
      const location = await Location.getCurrentPositionAsync({});
      setPhoto(myPhoto.uri)
      setLocation(location)

   }

   const sendPhoto = () => {
      navigation.navigate("DefaultScreen", { photo, location });
      upLoadPostToserver()
      setPhoto(null)

   }
   const upLoadPhotoToServere = async () => {
      const response = await fetch(photo)
      const file = await response.blob()
      const postId = Date.now().toString()
      await firebase.storage().ref(`postPhoto/${postId}`).put(file)
      const processedPhoto = await firebase.storage().ref('postPhoto').child(postId).getDownloadURL()
      console.log("processedPhoto", processedPhoto)
      return  processedPhoto
     
}

  const upLoadPostToserver = async()=>{
   const photo =await upLoadPhotoToServere()
   const greatePost = await firebase.firestore().collection("post").add({photo , comment , location:location.coords , userId , nickName})
  }
   return (


      <View style={styles.cointeiner}>
         {isFocused && <Camera style={styles.camera} ref={setCamera} type={type}>

            {photo && (
               <View style={styles.takePhotoCointainer}>
                  <Image style={styles.image} source={{ uri: photo }} />
               </View>
            )}

            <TouchableOpacity onPress={takeFoto} style={styles.snapCointeiner}>
            <MaterialIcons name="camera-alt" size={44} color="black" />
            </TouchableOpacity>
         </Camera>}

         {photo && (
            <WrapperSendAndComments style={styles.wrapper}>

               <View style={styles.cointeinerInput}>
                  <TextInput style={styles.input} onChangeText={setComment} placeholder="Write your comment"  placeholderTextColor="#dcdcdc"/>
               </View>

               <View style={styles.cointainerSendBtn}>
                  <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
                  <MaterialIcons name="send-to-mobile" size={30} color="white"/>
                  </TouchableOpacity>
               </View>

            </WrapperSendAndComments>
         )}
      </View>


   )
}
const styles = StyleSheet.create({
   cointeiner: {
      flex: 1,
      backgroundColor: "black"
   },
   camera: {
      flex: 1,
      marginTop: 50,
      alignItems: "center",
      justifyContent: "flex-end",

   },
   snapCointeiner: {
      width: 70,
      height: 70,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: "white",
   },
   takePhotoCointainer: {
      position: "absolute",
      top: 10,
      left: 10,
      borderWidth: 1,
      borderColor: "black",
      width: 120,
      height: 160,
      backgroundColor: "white",
      padding: 2,

   },
   image: {
      width: "100%",
      height: "100%",
   },
   text: {
      color: "red"
   },

   cointeinerInput: {
      borderRadius: 10,
      width:300,
   },
   input: {
   
      height: 40,
      borderWidth: 3,
      paddingLeft:30,
      borderBottomColor: "gray",
      borderColor: "gray",
      borderRadius: 10,
      color:"white",
   },

})

export default CreatePostScreen