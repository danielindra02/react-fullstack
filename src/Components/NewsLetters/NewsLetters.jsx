import React from 'react'
import './NewsLetters.css'

export const NewsLetters = () => {
  return (
    <div className='newsletters'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subcribe to our newletter and Stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}
