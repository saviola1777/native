import LoginScreen from "./loginAndRegistrationScreen/LoginScreen"
import RegistrationScreen from "./loginAndRegistrationScreen/RegistrationScreen"
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();
const LoginAndRegistration = () => {

   return (
      <MainStack.Navigator>
         <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
         <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />

      </MainStack.Navigator>


   )
}


export default LoginAndRegistration