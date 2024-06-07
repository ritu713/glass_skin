import {Route, Routes} from 'react-router-dom'

import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Layout from './Layout/Layout'
import Login_Layout from './Layout/Login-Layout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Analyse from './Pages/Analyse'
import MyRoutines from './Pages/MyRoutines'
import { useAppContext } from './AppContext'
import NewRoutine from './Pages/NewRoutine'

function App() {

  const { isLoggedIn } = useAppContext()

  return (
    <div className='h-screen bg-stone-50 text font-serif'>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path='/register' element={<Login_Layout><Register/></Login_Layout>}/>
        <Route path="/signin" element={<Login_Layout><Login/></Login_Layout>}/>
        <Route path='/contact-us' element={<Layout><Contact/></Layout>}/>
        <Route path='/analyse' element={<Layout><Analyse/></Layout>}/>
        <Route path='/routine' element={<Layout><MyRoutines/></Layout>}/>

        {
          isLoggedIn && (
            <>
              <Route path='/profile' element={<Layout><Profile/></Layout>}/>
              <Route path='/new-routine' element={<Layout><NewRoutine/></Layout>}/>
            </>
          )
        }
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App

