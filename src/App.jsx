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
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
