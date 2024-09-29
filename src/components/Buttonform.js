import React from 'react'
import './Buttonform.css'
import icon1 from './images/google-brands-solid.svg'
import GoogleButton from 'react-google-button'
const Buttonform = () => {
    return (
        <div className='btn'>

                 <div className='gogle'>
                
                <button className='btn1'>    
                <input type=" " value='Continue with Google'>
                </input> 
                </button>
            </div>

            <div className='fb'>
                <button className='btn2'>
                    {/* <img></img> */}
                    <input type="text" value='Continue with Facebook'></input>
                </button>
            </div>

            <div className='iphone'>
                <button className='btn3'>
                    {/* <img></img> */}
                    <input type="" value='Continue with Apple'></input>
                </button>
            </div>
           



        </div>
    )
}

export default Buttonform
