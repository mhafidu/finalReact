import React from 'react'
import Logo from '../asset/logo.png'
import Icon from '../asset/icon-user.png'
import Home from '../pages/Home'
import '../Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbarafter() {
    return (
        <Router>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light " >
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src={Logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav container-fluid d-flex justify-content-end align-items-center">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Cari Kerja</a>
                            <a class="nav-link" href="#">Cari Magangs</a>
                            <a class="nav-link" href="#">
                                <div class="dropdown">
                                    <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Notifikasi
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Umum</a></li>
                                        <li><a class="dropdown-item" href="#">Hasil</a></li>
                                    </ul>
                                </div>
                            </a>
                            <a class="nav-link" href="#">
                                <button type="button" class="btn btn-light d-flex align-items-center justify-content-between" style={{width:"220px"}}>
                                    <div className='image-user-navbar'>
                                        <img src={Icon}></img>
                                    </div>
                                    <span className="name-user-navbar">Muhammad Hafidz</span>
                                </button>                                
                            </a>                            
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

export default Navbarafter
