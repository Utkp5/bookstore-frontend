import React from 'react'
import "./Compt2.css"
import { HiCheck } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

function Compt2() {
  return (
    <div className='compt2_div'>
      <div>
        <img src="https://bookpresstheme.com/html/assets/images/index2/author.png" alt="" className='compt2_img'/>
      </div>
      <div className='compt2_sub_div'>
        <p className='compt2_p1'><HiMinus />AUTHOR & PUBLISHER</p>
        <p className='compt2_p2'>Student Pandit Utkarsh</p>
        <p className='compt2_p3'>Lorem ipsum dolor sit amet, con ge sectetur adipiiscing elit, eius Lorem ipsum dolor sit amet, coniscinsectetur adipiscing elit, eius mod tempor incididunt labore mod sit amet adipiscingconsectetur.</p>
        <p className='compt2_p4'>< HiCheck color='#1882DB'/> About Writting More Accomplished</p>
        <p className='compt2_p5'>< HiCheck color='#1882DB'/> Exceptionally Energetic Accomplished 10+ Granted</p>
        <p className='compt2_p6'>< HiCheck color='#1882DB'/> More Accomplished 10+ Granted</p>
        <p className='compt2_p7'>< HiCheck color='#1882DB'/> Exceptionally Energetic About Writting</p>
        <p className='compt2_p8'>< HiCheck color='#1882DB'/> Most Popular Writter In The Year</p>
        <img src="https://bookpresstheme.com/html/assets/images/index2/signature-1.png" alt="" className='compt_img1'/><br />
        <a href="/"><button className='compt2_btn'>Learn More</button></a>
      </div>
    </div>
  )
}

export default Compt2
