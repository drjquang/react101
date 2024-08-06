import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
// import Home from './pages/Home'
// import About from './pages/About'
import Register from './components/Register'
import Login from './components/Login'
import CheckFirebaseConnection from './components/CheckFirebaseConnection'
import ReadFirestore from './components/ReadFirestore'
import WriteFirebase from './components/WriteFirebase'
import WriteRTDB from './components/WriteRTDB'
import ReadRTDB from './components/ReadRTDB'
import UpdateRTDB from './components/UpdateRTDB'
import UpdateWrite from './components/UpdateWrite'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="connect" element={<CheckFirebaseConnection />} />
      <Route path="read" element={<ReadFirestore />} />
      <Route path="write" element={<WriteFirebase />} />
      <Route path="writeRTDB" element={<WriteRTDB />} />
      <Route path="readRTDB" element={<ReadRTDB />} />
      <Route path="updateRTDB" element={<UpdateRTDB />} />
      <Route path="updatewrite/:firebaseId" element={<UpdateWrite />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
