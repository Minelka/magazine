import Navi from './components/Navi'
import './assets/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LoadingPage from './assets/pages/LoadingPage'
import HomePage from './assets/pages/HomePage'
import LoginPage from './assets/pages/LoginPage'
import './assets/styles/index.css'
import DetailPage from './assets/pages/DetailPage'
import { PrivateRoute } from './assets/services/PrivateRoute'
import Form from './components/Form'


const App = () => {

  
  return (
    <>
      <BrowserRouter>  
          <Routes>
            <Route path='/*' element={<LoadingPage/>} />
            <Route path='magazin' element={<Navi/>}>
                <Route path='/magazin' element={<HomePage/>}>
                <Route path='magazin' element={<PrivateRoute special={<Form/>}/>} />
                </Route>
                <Route path='/magazin/:magazinID' element={<DetailPage/>}/>
            </Route> 
            <Route path='login' element={<LoginPage/>}/>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
    </>
  )
}
export default App