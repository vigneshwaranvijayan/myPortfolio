import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PG from './Pages/PG'
import UG from './Pages/UG'
import Other from './Pages/Other'
import Notfoud from './Pages/404'


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/pg' element={<PG/>} />
          <Route path='/ug' element={<UG/>} />
          <Route path='/other' element={<Other/>} />
          <Route path='*' element={<Notfoud/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}