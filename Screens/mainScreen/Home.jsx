import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";

import PostScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
   <Tabs.Navigator screenOptions={{tabBarShowLabel:false ,tabBarStyle: {backgroundColor: "black" ,height:40, padding:5}}} >

      <Tabs.Screen name="Post" component={PostScreen}
       options={{  
         title: "",    
      headerStyle:{backgroundColor: "#ffe4b5" , height:60},
       headerRight: () => (<Button  onPress={() =>navigation.navigate("Login")} title="Logout"color="#ffe4b5"/>),
       tabBarIcon: ({ focused, color, size }) =><MaterialCommunityIcons name="postage-stamp" size={24} color={color} />}}/>

      <Tabs.Screen name="Create" component={CreatePostScreen} 
      options={{
         headerShown:false, 
         tabBarIcon: ({ focused, color, size }) =><MaterialCommunityIcons name="sticker-plus-outline" size={24} color={color} /> }}/>

      <Tabs.Screen name="Profile" component={ProfileScreen} 
      options={{headerShown:false,
      tabBarIcon: ({ focused, color, size }) =><MaterialCommunityIcons name="face-man-profile" size={24} color={color} />}}/>
      
    </Tabs.Navigator>
  );
};

export default Home;