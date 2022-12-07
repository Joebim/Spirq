import React from 'react'
import "../styles/Home.scss"
import { Link } from 'react-router-dom'
import bgImage from "../assets/images/Home.png"

export default function Home() {
  return (
    <>
    {/* <img src={bgImage} alt="" /> */}
        <div className="header">
            <div className="nav-home pl-[30px] []sm:pl-[50px] md:pl-[50px] lg:pl-[100px] bg-[url('./assets/images/Home.png')] bg-cover">
                <div className="nav items-center">
                    <div className="icon">
                        <Link to="/">Sp<span style={{color: "#d82b14"}}>i</span>rq</Link>
                    </div>
                    
                    <div className="links hidden md:flex">
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                        <div>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </div>

                    <button className='' ><a href="/">Get Started</a></button>
                </div>
                
                <div className="nav-intro">
                    <h1>Your <span style={{color: "#d82b14"}}>voice</span>  matters.</h1>
                    <h3>Open your minds and share your opinons</h3>
                    <button className='px-[10px] py-[5px]'><Link to="blog.html">Get Started</Link></button>
                </div>
                
            </div>   
        </div>

        <div className="container h-[100vh] bg-gray-200">
            
        </div>

    <footer id="main footer"> 
        <h4>Spirq</h4>
        <p>by Joseph Akinwole</p>
        <cite>@ TwentyTwentyOne</cite>
    </footer>
    </>
  )
}
