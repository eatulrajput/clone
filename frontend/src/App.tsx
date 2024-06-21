import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Singin';

const firebaseConfig = {
  apiKey: "AIzaSyCVDEvbdMRTEh5silAiy2wweCERQmXz9wo",
  authDomain: "leetcode-clone-f0763.firebaseapp.com",
  projectId: "leetcode-clone-f0763",
  storageBucket: "leetcode-clone-f0763.appspot.com",
  messagingSenderId: "410182346454",
  appId: "1:410182346454:web:911d8fd08419744c804b77",
  measurementId: "G-FCJ41V1T6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <>
      <div>
       <Signin/>
      </div>
      
    </>
  )
}

export default App
