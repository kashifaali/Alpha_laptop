import { useState } from 'react'
import Login from './auth/Login'
import Signup from './auth/signup'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Item_detail from './pages/item-detail/Item_detail'
import Index from './pages/Index'
import Blog from './pages/Blog/Blog'
import ContactUs from './pages/Contact/ContactUs'
import Addnew from './admin/Addnew'
import Addblogs from './admin/Addblogs'
import Viewalldata from './admin/Viewalldata'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/item_detail/:id" element={<Item_detail />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/addnew' element={<Addnew/>} />
      <Route path='/addblog' element={<Addblogs/>}/>
      <Route path='/alldata' element={<Viewalldata/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
