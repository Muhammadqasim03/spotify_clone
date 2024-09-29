


import  react from 'react'
import "./Navbar.css"
import icon1 from "../components/images/right-icon22.svg"
import icon2 from "../components/images/right-icon1.svg"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  function goToScreen(){

      navigate("/Signup")
  };
  function gotologin(){
    navigate("/Login")
  }
  return (
    <div className='navbar'>
      <div className='arow'>
        <img className='icon1' src={icon2}alt='err'></img> 
        <img className='icon2' src={icon1}alt='err'></img> 

      </div>
      <div className='btn'>
        <span className='Signup' onClick={goToScreen} style={{cursor:"pointer"}}>Sign up </span>
        <button className='Login'onClick={gotologin} style={{cursor:"pointer"}}>Log in</button>
      </div>
    </div>
  )
}
