import { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from '../../firebase.config'
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth'

const AuthContext = createContext()


export function AuthContextProvider({ children }) {
  //   const [user, setUser] = useState({})
  function signUp(email, password) {
    // return createUserWithEmailAndPassword(auth, email, password)
    return
  }
  function logIn(email, password) {
    // return signInWithEmailAndPassword(auth, email, password)
    return
  }
  function logOut() {
    // return signOut(auth)
    return
  }
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser)
  //     })
  //     return () => {
  //       unsubscribe()
  //     }
  //   })
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
  // }
  // export function UserAuth() {
  //   return useContext(AuthContext)
}
