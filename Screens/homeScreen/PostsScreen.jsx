import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPost from "../defaultScreen/DefaultScreen";
import MapScreen from "../defaultScreen/MapScreen";
import CommentsScreen from "../defaultScreen/CommentsScreen";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { authSingOutUser } from "../../Redux/auth/authOperation";

const NestedScreen = createStackNavigator()

const PostScreen = ({ navigation })=>{
   const dispatch =useDispatch()
   
   const userLogout = () =>{
      dispatch(authSingOutUser())
      //  navigation.navigate("Login")
   }
   return(
   
    <NestedScreen.Navigator>
       <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPost} options={{
          title: "",
          headerStyle: { backgroundColor: "black", height: 70  },
          headerRight: () => (<Button onPress={userLogout} title="Logout" color="black" />),
       }} />
       <NestedScreen.Screen name="Map" component={MapScreen} options={{
          title: "Back to DefaultScreen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black", height: 70   },
       }} />
       <NestedScreen.Screen name="Comment" component={CommentsScreen} options={{
          title: "Back to DefaultScreen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black", height: 70   },
       }} />
    </NestedScreen.Navigator>

   )
}

export default PostScreen

