import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import LoginAndRegistration from "./LoginAndRegistration";

import { useSelector } from "react-redux";

const MainStack = createStackNavigator();

const Main = () => {

  const state = useSelector(store => store)

  console.log("Мій глобальний стор", state)

  return (

    <NavigationContainer>
      <MainStack.Navigator>

        {state.auth.stateChange
          ? <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          : <MainStack.Screen name="LoginAndRegistration" component={LoginAndRegistration} options={{ headerShown: false }} />
        }

      </MainStack.Navigator>
    </NavigationContainer>

  );
}
export default Main