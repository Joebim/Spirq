import React from 'react'
// import "../styles/Blog.scss"
import { Link } from 'react-router-dom'
import spirqDark from "../assets/images/Spirq Dark.svg"
import spirqLight from "../assets/images/Spirq Light.svg"
import interior from "../assets/images/interior.jpg"
import avatar1 from "../assets/images/avatar1.jpeg"
import interior2 from "../assets/images/interior2.jpg"
import avatar5 from "../assets/images/avatar5.jpeg"
import tree from "../assets/images/tree.jpg"
import avatar3 from "../assets/images/avatar3.jpeg"


export default function Blog() {
  return (
    <>
        
        <div class="nav-bar">
            {/* <!-- Nav-bar --> */}
            <div class="logo">
                <img src={spirqDark} alt=""></img>
            </div>
            
            <div>Spirq</div>

            <Link to="/">Blog</Link>
            
        </div>

        <div class="content">
            <h1>Welcome to Spirq! </h1>
            <img src={spirqLight} alt=""></img>
            <p class="intro">Your one and only social platform, make your comments, drop your ideas and share your feelings</p>
            
        
            
            <div class="container">
                <div class="card">
                    <div class="card-header">
                        <img src={interior} alt=""></img>
                    </div>
                    <div class="card-body">
                        <span class="tag tag-teal">Technology</span>
                        <h4>why does interior designers spend so much time</h4>
                        <p>An exploration into the world of interior design.</p>

                        <div class="user">
                            <img src={avatar1} alt="" height="100" width="100"></img>
                            <div class="user-info">
                                <h5>Carrie Brewer</h5>
                                <small>2h ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <img src={interior2} alt=""></img>
                    </div>
                    <div class="card-body">
                        <span class="tag tag-deal">design</span>
                        <h4>Do you wish to know what secrets lies in interior decor</h4>
                        <p>let's dive into the world of design.</p>

                        <div class="user">
                            <img src={avatar5} alt="" height="100" width="100"></img>
                            <div class="user-info">
                                <h5>carthy jones</h5>
                                <small>4h ago</small>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card">
                    <div class="card-header">
                        <img src={tree} alt=""></img>
                    </div>
                    <div class="card-body">
                        <span class="tag tag-feel">flowers</span>
                        <h4>what is the idea behind flowers and how it blends into the background</h4>
                        <p>you might just be startled at the work of nature.</p>

                        <div class="user">
                            <img src={avatar3} alt="" height="100" width="100"></img>
                            <div class="user-info">
                                <h5>lindy lawson</h5>
                                <small>yesterday</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
                
        </div>        


    <footer>
        <blockquote cite="http://google.com"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis sed vitae nam quos, ipsum maiores ipsam placeat nostrum adipisci consequuntur quaerat ut eveniet sequi consectetur sint rerum id aliquam.
        </blockquote>
        
        <div class="links">
            <a href="blog.html">Blog</a>
            <a href="about.html">About</a>
            <a href="index.html">Home</a>
        </div>
        
        <h4>Spirq</h4>
        <p>by Joseph Akinwole</p>
        <cite>@ TwentyTwentyOne</cite>
    </footer>
    </>
  )
}
