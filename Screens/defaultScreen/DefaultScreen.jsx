import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WrapperPost from '../../components/WrappersPost';
import firebase from "../../firebase/config";

const DefaultScreenPost = ({ route, navigation }) => {
   const [post, setPost] = useState([])

   // console.log("Post", post)
   const getAllPost = async () => {
      await firebase.firestore().collection("post").onSnapshot((data) => setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
   }

   useEffect(() => {
      getAllPost()

   }, [])

   return (

      <WrapperPost>
         {post.length > 0 &&
            <View style={styles.cointainer}>

               <FlatList data={post} style={styles.flatlist} keyExtractor={(item, indx) => indx.toString()}
                  renderItem={({ item }) => (
                     <>
                        <View style={styles.cointainerImage}>

                           <Image source={{ uri: item.photo, width: 260, height: 350 }} />
                           <View style={styles.cointainerText}>
                              <Text style={styles.text}>{item.comment}</Text>
                           </View>

                           <View style={styles.cointainerMapAndComment}>
                              <TouchableOpacity onPress={() => navigation.navigate("Map", { location: item.location })} >
                                 <MaterialCommunityIcons style={{ marginRight: 40 }} name="google-maps" size={25} color="#1e90ff" />
                              </TouchableOpacity>

                              <TouchableOpacity onPress={() => navigation.navigate("Comment", { postId: item.id })} style={styles.sendBtn}>
                                 <MaterialCommunityIcons name="comment-bookmark" size={25} color="#1e90ff" />
                              </TouchableOpacity>

                           </View>
                        </View>


                     </>

                  )}
               />

            </View>
         }
      </WrapperPost>

   )
}

const styles = StyleSheet.create({

   cointainer: {
      padding: 10,
   },

   flatlist: {
      backgroundColor: "gray",
      marginHorizontal: 45,
      borderRadius: 5,

   },

   cointainerImage: {
      alignContent: "center",
      padding: 5,
      borderWidth: 1,
      backgroundColor: "#fff8dc",
      borderColor: "green",
      margin: 5
   },

   cointainerText: {
      width: "100%",
      alignItems: "center",
      backgroundColor: "#f5deb3",
      marginTop: 5,
      padding: 3,
   },

   text: {
      fontSize: 16,
      color: "#696969",

   },
   cointainerMapAndComment: {
      flexDirection: "row",
      paddingLeft: 85,
      paddingTop: 5,
   }
})


export default DefaultScreenPost 