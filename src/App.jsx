
import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'



function App() {
 const [searchTerm,setSearchTerm]= useState("")

 const handleNavbarSearch = (term)=>{
  setSearchTerm(term)
 }
console.log(searchTerm,10)
  return (
    <>
     <Navbar onSearch={handleNavbarSearch}  />
    <Events searchTerm={searchTerm}  /> 
   
    </>
  )
}

export default App
