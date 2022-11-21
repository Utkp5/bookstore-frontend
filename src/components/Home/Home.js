import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='home_div'>
        <div className='home_sub_div'>
            <p className='p1'>50% discount on early purchase</p>
            <p className='p2'>Settle Your Daily <br /> life Issue in 1 <br /><span className='span1'>Minute.</span></p>
            <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius Lorem <br />
             ipsum dolor sit amet, consectetur adipiscing elit, eius mod tempor<br />
            incididunt labore mod tempor
             incididunt ut labore adipiscing.</p>

             <button className='btn1'>More About Us</button>
        </div>  
        <div>
            <img src="https://bookpresstheme.com/html/assets/images/index2/book-image-main.png" alt="" className='home_img'/>
        </div>

    </div>
  )
}

export default Home
