// import {initializeApp} from 'firebase/app'
// import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// import {
//     getFirestore,
//     doc,
//     getDoc,
//     setDoc
// }from "firebase/firestore"


// const firebaseConfig = {
//     apiKey: "AIzaSyBR2wZN3mqCpdUA9_-BN2ZJOJIClT5PkF8",
//     authDomain: "messenger-1bbd2.firebaseapp.com",
//     projectId: "messenger-1bbd2",
//     storageBucket: "messenger-1bbd2.appspot.com",
//     messagingSenderId: "966649482296",
//     appId: "1:966649482296:web:4af5093744e7a1fa4eaacd",
//     measurementId: "G-HD84H20VJ2"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider ()

// provider.setCustomParameters({
//     prompt: 'select_account'
// })

// export const auth = getAuth()
// export const db = getFirestore()
// // google sign in
// export const signInGoogle =()=> signInWithPopup(auth, provider)
// // create doc for auth 

// export const createDocForAuth = async(userAuth)=>{
//     console.log(userAuth);
//     const {displayName,email} = userAuth.user
//     const docData = {
//         displayName,
//         email
//     };

//     const userDocInfo = await getDoc(userAuth)
//     console.log("noooo",userDocInfo);
//     if(!userDocInfo.exists()){
//         await setDoc(doc(db, "users", userAuth.user.uid ), docData);
//     }

//   return userDocInfo
// }