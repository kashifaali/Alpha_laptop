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
import Adminlogin from './auth/Adminlogin'
import Adminindex from './admin/Adminindex'
import AdminSidenavbar from './components/AdminSidenavbar'
import Editformlaptop from './components/Editformlaptop'
import EditFormBlog from './components/EditFormBlog'

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
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path='/admin' element={<Adminindex/>} />
      <Route path='/adminSidenavbar' element={<AdminSidenavbar/>} />
      <Route path='/edit-laptop/:id' element={<Editformlaptop/>} />
      <Route path='/edit-blog/:id' element={<EditFormBlog/>} />
   

    </Routes>
    </BrowserRouter>
  )
}

export default App

// 6789104