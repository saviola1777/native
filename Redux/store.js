import { configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { persistStore ,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig= {
   key:"root",
   storage:AsyncStorage,
}
const persistedReducer = persistReducer(
   persistConfig ,
   authReducer
)


export const store = configureStore({
   reducer: {auth:persistedReducer },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware({
     serializableCheck: false
   }),
})

export const presistore = persistStore(store)