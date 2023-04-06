import React, { useState, useEffect } from "react";
import { View, Button, FlatList, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import WrapperPost from '../../components/WrappersPost';

const DefaultScreenPost = ({ route, navigation }) => {
   const [post, setPost] = useState([])
   const [location, setLocation] = useState(null);

   console.log("DefaultscreenPost-post", location)
   useEffect(() => {
      if (route.params) {
         const { photo } = route.params
         setPost((prevState) => [...prevState, { photo }])
         setLocation(route.params.location.coords)
      }
   }, [route.params])

   const sendLocationPhoto = () => {
      navigation.navigate("Map", { location });
   }

   return (

      <WrapperPost>
         <View style={styles.cointainer}>
            <FlatList
               data={post}
               keyExtractor={(item, indx) => indx.toString()}
               renderItem={({ item }) => (
                  <View style={{ marginBottom: 10, alignItems: "center" }}>
                     <Image source={{ uri: item.photo, width: 220, height: 350 }} />
                  </View>
               )}
            />

            {route.params && (
               <View style={{ display: "flex" }}>
                  <TouchableOpacity onPress={sendLocationPhoto} style={styles.sendBtn}>
                     <Text style={styles.textBtn}>Go to map</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Comment")} style={styles.sendBtn}>
                     <Text style={styles.textBtn}>Go to Comment</Text>
                  </TouchableOpacity>
               </View>
            )}


         </View>
      </WrapperPost>

   )
}

const styles = StyleSheet.create({

   cointainer: {
      flex: 1,
      padding: 10
   },
   sendBtn: {
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
   },
   textBtn: {
      width: 140,

      backgroundColor: "#f0ffff",
      borderRadius: 10,
      color: "green",
      padding: 12,
      textAlign: "center"
   }
})


export default DefaultScreenPost 