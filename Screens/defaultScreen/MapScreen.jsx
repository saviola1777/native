import { View, Text, StyleSheet, Dimensions } from 'react-native';
import WrapperPost from "../../components/WrappersPost"
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from "react";

const MapScreen = ({ route }) => {
   const [location, setLocation] = useState(null);
   console.log("MapLocation", location)
   useEffect(() => {
      if (route.params) {
         setLocation(route.params.location)
      }
   }, [route.params])
   return (

      <MapView
         style={styles.mapStyle}
         region={{
            latitude: 37.4220936,
            longitude: -122.083922,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
         }}
      >
         <Marker
            title="Dubno"
            coordinate={{ latitude: 37.4220936, longitude: -122.083922 }}
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