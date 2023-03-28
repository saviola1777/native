 import {View,Text,StyleSheet,} from 'react-native';
import WrapperPost from '../../components/WrappersPost';

const CreatePostScreen =  () => { 

   return (
      
   <WrapperPost>
      <View>
      <Text style={styles.title}>Create Post </Text>
      </View>
      </WrapperPost>
    
   )
}
const styles = StyleSheet.create({
   title:{
      textAlign:"center",
      fontSize:30,
      color:"#fff",
 },
})

export default CreatePostScreen