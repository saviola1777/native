import { View, Text, StyleSheet, Dimensions } from 'react-native';
import WrapperPost from "../../components/WrappersPost"
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from "react";

const MapScreen = ({ route }) => {
  const {latitude , longitude} = route.params.location 
  console.log("latitude , longitude", latitude , longitude)
   return (
 
      <MapView
         style={styles.mapStyle}
         region={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
         }}
      >
         <Marker
            title="Dubno"
            coordinate={{ latitude, longitude}}
            description='Location on my city'
         />
      </MapView>

   )
}
const styles = StyleSheet.create({
   mapStyle: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
   },
})

export default MapScreen 