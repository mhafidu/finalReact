import React from 'react'
import '../News.css'


function News() {
    return (
        <div className = "body-news">
            <div className="containner-news">
                <h2><b style={{color: "white"}}>NEWS</b> </h2>
                <div className="high-news">
                    <div className="item1-high-news">
                        <div className="opacity-item1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                    <div className="item2-high-news">
                        <div className="opacity-item2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slide-news">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="flex-row">
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/302x302" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="flex-row">
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/302x302" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="flex-row">
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/302x302" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card me-5" style={{width: "20rem"}}>
                                <img src="https://source.unsplash.com/random/301x301" className="card-img-top" alt="https://source.unsplash.com/random"/>
                                <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                            <div className="lingkaran">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>  
                            </div>         
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
