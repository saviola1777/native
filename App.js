
import { Provider} from "react-redux";
import {store , persistore} from "./Redux/store.js"
import { PersistGate } from "redux-persist/integration/react";
import { useState } from "react";
import Main from "./Screens/Main";
 
export default function App() {
  const[user,setUser]=useState(null)

  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistore} loading={null}> */}
      <Main/>
      {/* </PersistGate> */}
    </Provider>
  );
}

