import React from 'react'
import Logo from '../asset/logo.png'
import Home from '../pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src={Logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav container-fluid d-flex justify-content-end">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link" href="#">Disabled</a>
                            
                            <Link to="/SignUp"><button type="button" class="btn btn-outline-primary rounded-pill">Sig up</button></Link> 
                            <Link to="/Login"><button type="button" class="btn btn-outline-primary rounded-pill ms-1">Login</button></Link>
                        </div>
                        <Switch>
                           <Route path="/SignUp">
                            <Home />
                          </Route>
                        </Switch>
                    </div>
                </div>
            </nav>
        </Router>
    )
}

export default Navbar
