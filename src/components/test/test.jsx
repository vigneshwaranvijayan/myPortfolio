import React from 'react'
import './test.css'
import INST1 from '../../image/INST/INST1.jpg'
import INST2 from '../../image/INST/INST02.jpg'
import INST3 from '../../image/INST/INST3.jpg'
import INST4 from '../../image/INST/INST4.jpg'
import INST5 from '../../image/INST/INST5.jpg'
import INST6 from '../../image/INST/INST6.jpg'
import INST7 from '../../image/INST/INST7.jpg'
import INST8 from '../../image/INST/INST8.jpg'
import INST9 from '../../image/INST/INST9.jpg'
import INST10 from '../../image/INST/INST10.jpg'
import INST11 from '../../image/INST/INST11.jpg'
import INST12 from '../../image/INST/INST12.jpg'
import INST13 from '../../image/INST/INST13.jpg'
import {BsInstagram} from 'react-icons/bs'
const test = () => {
  return (
    <section id='test'>
      <div className='tech_text'>
        <h5>My Drawing</h5>
        <h2>..Arts..Works..!</h2>
      </div>
      <div className="test_img">
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST1} alt="INST1" srcset="" />
          </div>
          <h3>A4: Rs:800</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST2} alt="INST2" srcset="" />
          </div>
          <h3>A3: Rs:1200</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST3} alt="INST3" srcset="" />
          </div>
          <h3>color: Rs:1000</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST4} alt="INST4" srcset="" />
          </div>
          <h3>A4: Rs:800</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST5} alt="INST5" srcset="" />
          </div>
          <h3>A4: Rs:800</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST6} alt="INST6" srcset="" />
          </div>
          <h3>A3: Rs:1000</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST7} alt="INST7" srcset="" />
          </div>
          <h3>A3: Rs:1000</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST8} alt="INST8" srcset="" />
          </div>
          <h3>A3: Rs:1200</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST9} alt="INST9" srcset="" />
          </div>
          <h3>A3: Rs:1200</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST10} alt="INST10" srcset="" />
          </div>
          <h3>Color: Rs:500</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST11} alt="INST11" srcset="" />
          </div>
          <h3>Demo</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST12} alt="INST12" srcset="" />
          </div>
          <h3>A4: Rs:700</h3>
        </article>
       <article className='test_img-img'>
          <div className='test_inside'>
            <img src={INST13} alt="INST13" srcset="" />
          </div>
          <h3>A3: Rs:1200</h3>
        </article>
      </div>
      <div className='inst_btn'>
        <a href="https://www.instagram.com/invites/contact/?i=1jdjb0yy0po6z&utm_content=3l5tczd" className='btn btn-primary'><BsInstagram/> Contact</a>
      </div>

    </section>
  )
}

export default test
