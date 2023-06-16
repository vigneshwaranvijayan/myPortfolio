import React from 'react'
import './portfolio.css'
import IMG1 from '../../image/W1.jpg'
import IMG2 from '../../image/W2.jpg'
import IMG3 from '../../image/W3.jpg'
import IMG4 from '../../image/W4.jpg'
import IMG5 from '../../image/W5.jpg'
import IMG6 from '../../image/W6.jpg'
import Game1 from '../../image/game1.jpg'
import Game2 from '../../image/game2.jpg'
const portfolio = () => {
  return (
    <section id="proffolio">
      <div className='tech_text'>
        <h5>My Works</h5>
        <h2>Web Development</h2>
      </div>
      <br />
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG1} alt="IMG1"/>
          </div>
          <h3>Basic Calculator</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
            {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG2} alt="IMG2"/>
          </div>
          <h3>NodeJS connect with MySQL</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
            {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
          </div> 
        </article>
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG3} alt="IMG3"/>
          </div>
          <h3>Clone Web</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
              {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG4} alt="IMG4"/>
          </div>
          <h3>Animated Web</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
            {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG5} alt="IMG5"/>
          </div>
          <h3>Basic Landpage</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
            {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='protfolio_item-image'>
              <img src={IMG6} alt="IMG"/>
          </div>
          <h3>Multiple Action with JS</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
            {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
          </div>
        </article>
      </div>
      <div className='tech_text'>
        <h5>My Works</h5>
        <h2>Game Development</h2>
      </div>
      <br />
      <div className="container portfolio_container">
        <article className='portfolio_item'>
            <div className='protfolio_item-image'>
                <img src={Game1} alt="IMG"/>
            </div>
            <h3>2D Bird Fly Game</h3>
            <div className="portfolio_item-cta">
             <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
             {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}  
            </div>
          </article>
          <article className='portfolio_item'>
            <div className='protfolio_item-image'>
                <img src={Game2} alt="IMG"/>
            </div>
            <h3>2D Car Game</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/vigneshwaranvijayan" className='btn btn-primary'>Guithub</a>
              {/* <a href="https://github.com/" className='btn btn-primary' >Live Demo</a> */}
            </div>
          </article>
      </div>
    </section>
  )
}

export default portfolio