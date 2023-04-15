import firebase from "../../firebase/config"
import { authSlice } from "./authSlice";


export const authSingUpUser = ({ login, email, password }) => async (dispatch, getState) => {
   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password); // визиваємо  firebase в ньому .auth() а ділі його метод цей реструє користувача 
      const user = await firebase.auth().currentUser                         // .currentUser  цей метод бере інформацію про юзера 

      await user.updateProfile({                                            // Далі ми в нашому профілі записуємо імся яке писали в логіні 
         displayName: login
      })
      const updateUserSuccess = await firebase.auth().currentUser             // після того як ми обновили профіль тобто добавили імя знов визиваєм інфу про юзера з оновленим імям 

      const userUpdateProfile = {
         userId: updateUserSuccess.uid,                                  // в зміну записуєм id користувача 
         nickName: updateUserSuccess.displayName,                         // записуємо їмя 
         stateChange: true,
      }

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))   // в діспач передаємо екшен і йому  передаємо id і імя яке запишемо в сторе

   }
   catch (error) {
      console.log("error24545", error.message)
   }
}
export const authSingInUser = ({ email, password }) => async (dispatch, getState) => {
   try {
       await firebase.auth().signInWithEmailAndPassword(email, password)
       
      const updateUserSuccess = await firebase.auth().currentUser

      const userUpdateProfile = {
         userId: updateUserSuccess.uid,
         nickName: updateUserSuccess.displayName, 
         stateChange: true,
      }

      dispatch(authSlice.actions.updateUserLogin(userUpdateProfile))
      // console.log("Login user", user)
   }
   catch (error) {
      console.log("error 22222", error.message)
   }
}


export const authSingOutUser = () => async (dispatch, getState) => {
   try {
      await firebase.auth().signOut() 
      dispatch(authSlice.actions.userLogout())
     
   }
   catch (error) {
      console.log("error authSingOutUser", error.message)
   }
 }




