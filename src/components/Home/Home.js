import React from 'react'
import "./Home.css"
import { FiPlay } from "react-icons/fi";
import Compt1 from '../smallComponents/Compt1/Compt1';
import Compt2 from '../smallComponents/Compt2/Compt2';

function Home() {
  return (
    <div>
        <div className='home_div'>
        <div className='home_sub_div'>
        <p className='p1'>50% discount on early purchase</p>
        <p className='p2'>Settle Your Daily <br /> life Issue in 1 <br /><span className='span1'>Minute.</span></p>
        <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius Lorem <br />
        ipsum dolor sit amet, consectetur adipiscing elit, eius mod tempor<br />
        incididunt labore mod tempor
                incididunt ut labore adipiscing.</p>
    
                 <button className='btn1'>More About Us</button>
                 <a href="https://www.youtube.com/embed/pZVZdgY25uY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"><button className='btn2'><FiPlay size={18} color = "#1882DB" pointsAtX={1}/></button></a>
            </div>  
            <div>
                <img src="https://bookpresstheme.com/html/assets/images/index2/book-image-main.png" alt="" className='home_img'/>
            </div>
        </div>

        <Compt1 />
        <Compt2 />
    </div>
    
  )
}

export default Home
