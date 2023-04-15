import { View, Text, StyleSheet,FlatList,Image } from 'react-native';
import WrapperPost from "../../components/WrappersPost"
import { useEffect ,useState } from 'react';
import firebase from "../../firebase/config"
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
   const [userPost ,setUserPosr]= useState ([])
   const {userId}=useSelector(store=>store.auth)

   useEffect(()=>{ 
      getUserPost()
   },[])

const getUserPost = async() =>{
 await firebase.firestore().collection("post").where("userId" , "==" , userId)
 .onSnapshot((data) => setUserPosr(data.docs.map((doc) => ({ ...doc.data()}))))
}

   return (

      <WrapperPost>
         <View>
         <FlatList data={userPost} style={styles.flatlist} keyExtractor={(item, indx) => indx.toString()}
                  renderItem={({ item }) => (
                     <>
                        <View style={styles.cointainerImage}>

                           <Image source={{ uri: item.photo, width: 260, height: 350 }} />
                           <View style={styles.cointainerText}>
                              <Text style={styles.text}>{item.comment}</Text>
                           </View>

                           {/* <View style={styles.cointainerMapAndComment}>
                              <TouchableOpacity onPress={() => navigation.navigate("Map", { location: item.location })} >
                                 <MaterialCommunityIcons style={{ marginRight: 40 }} name="google-maps" size={25} color="#1e90ff" />
                              </TouchableOpacity>

                              <TouchableOpacity onPress={() => navigation.navigate("Comment", { postId: item.id })} style={styles.sendBtn}>
                                 <MaterialCommunityIcons name="comment-bookmark" size={25} color="#1e90ff" />
                              </TouchableOpacity>

                           </View> */}
                        </View>


                     </>

                  )}
               />
         </View>
      </WrapperPost>

   )
}
const styles = StyleSheet.create({
   title: {
      textAlign: "center",
      fontSize: 30,
      color: "#fff",
   },
})

export default ProfileScreen