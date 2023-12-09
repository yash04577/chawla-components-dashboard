import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMaterialModal from './modal/AddMaterialModal.tsx'
import UpdateMaterialModal from './modal/UpdateMaterialModal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/addmaterial' element={<AddMaterialModal />} />
      <Route path='/updatematerial' element={<UpdateMaterialModal />} />
    </Routes>
  </BrowserRouter>
  
)
