import React from 'react'
// component
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// css
import '../perusahaan.css'

function Perusahaan() {
    return (
        <div className="bg-primary">
            <Navbar></Navbar>
            <div className=" container-fluid container-perusahaan">
                <Sidebar></Sidebar>
                <div className="main-content-perusahaan">
                        <div className="content-top-perusahaan">
                            <div className="container-dropdown-perusahaan">
                                <div class="dropdown">
                                    <button class="btn btn-outline-primary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Bidang
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kebutuhan
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <form class="d-flex">
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>               
                        <div className="content-main-perusahaan">
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/200x200" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/201x201" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/202x202" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/203x203" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/201x201" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/200x200" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/201x201" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/201x201" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/202x202" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/203x203" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            
                        </div>                                            
                    
                </div>
            </div>
        </div>
    )
}

export default Perusahaan
