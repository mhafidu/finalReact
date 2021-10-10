import React from 'react'
import {useRef} from 'react'
import '../Home.css'

function Home() {
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = useRef()
    function animation (){
        container.current.classList.add("sign-up-mode")
        console.log(container) 
    }
    function remov(){
        container.current.classList.remove("sign-up-mode")
        console.log(container) 
    }
    // sign_up_btn.addEventListener("click", () => {
    // container.classList.add("sign-up-mode");
    // });

    // sign_in_btn.addEventListener("click", () => {
    // container.classList.remove("sign-up-mode");
    // });
    
    return (

        <div>

            <div ref={container} className="container-home">
                <div className="forms-container">
                    <div className="signin-signup">
                    <form action="#" className="sign-in-form form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn1 solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn1 solid" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="panels-container">                  
                    <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                        ex ratione. Aliquid!
                        </p>
                        <button className="btn1 transparent" id="sign-up-btn" onClick={animation}>
                        Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                        </p>
                        <button className="btn1 transparent" id="sign-in-btn" onClick={remov}>
                        Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
