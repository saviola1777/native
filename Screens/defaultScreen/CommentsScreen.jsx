import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';
import WrapperPost from "../../components/WrappersPost"
import { useState, useEffect } from 'react';
import firebase from '../../firebase/config';
import { useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';

const CommentsScreen = ({ route }) => {
   const [comment, setComment] = useState("")
   const [allComments, setAllComments] = useState([])
   const { nickName } = useSelector(store => store.auth)
   const { postId } = route.params

   useEffect(() => {
      getAllPost()
   }, [])
   console.log(allComments)

   const createComment = async () => {
      await firebase.firestore().collection("post").doc(postId).collection("comments").add({ comment, nickName })
      setComment("")
   }

   const getAllPost = async () => {
      await firebase.firestore().collection("post").doc(postId).collection("comments").onSnapshot((data) => setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
   }
   return (

      <WrapperPost>

         <View style={styles.cointeinerInput}>
            <TextInput style={styles.input} onChangeText={setComment} placeholder="Write your comment" placeholderTextColor="#dcdcdc" />

            <View style={styles.cointainerSendBtn}>
               <TouchableOpacity onPress={createComment} style={styles.sendBtn}>
                  <MaterialIcons name="send-to-mobile" size={40} color="white" />
               </TouchableOpacity>
            </View>

         </View>


         <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Comment</Text>
            <FlatList data={allComments} style={styles.flatlist} keyExtractor={(item, indx) => indx.toString()}
               renderItem={({ item }) => (
                  
                  <View style={styles.cointainerComment}>
                     <Text> Name : {item.nickName}</Text>
                     <Text> Cpomment :  {item.comment}</Text>
                  </View>
               )}
            />
         </SafeAreaView>



      </WrapperPost>

   )
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems:"center"
   },
   text: {
      fontSize: 30,
      fontWeight: '500',
      color:"#cd5c5c",
   },
   cointeinerInput: {
      margin:10,
      borderRadius: 10,
      flexDirection: "row",
      width: "100%",
      marginHorizontal:20,

   },
   input: {
      width:320,
      height: 40,
      borderWidth: 3,
      paddingLeft: 20,
      borderBottomColor: "gray",
      borderColor: "gray",
      borderRadius: 10,
      color: "white",
   },
   cointainerComment:{
borderWidth:3,
borderColor:"#e6e6fa",
width:300,
paddingLeft:20,
backgroundColor:"#adff2f",
marginBottom:10
 },

})

export default CommentsScreen