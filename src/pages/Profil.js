import React from 'react'
// icon
import Facebook from '../icon/Facebook.png'
import Instagram from '../icon/Instagram.png'
import Twiter from '../icon/Twiter.png'
import List from '../icon/list.png'
import Edu from '../icon/list-edu.png'
// css
import '../Profil.css'
function profil() {
    return (
        <div className = "body-profil">
            <div className = "containner-profil">
                <div className = "main-profil">
                    <div className = "content-top-profil">
                        <div className="background-profil"></div>
                        <div className="document-user-profil">
                        <div class="img-profil"></div>
                                <div class="description-user-profil">
                                <div className="name-profil">
                                    <h3>User Name</h3>
                                    <h6>Web Development, Fix bugs, Software Enginnering</h6>
                                </div>
                                <div className="list-addres-profil">
                                    <div className="addres1-profil">
                                        <span>Solo,Jawa Tengah</span>
                                        <span>081239900323</span>
                                        <span>diwangsa@gmail.com</span>
                                    </div>
                                    <div className="addres2-profil">
                                        <span><img src={Facebook} alt=""/> Username Sosial Media</span>
                                        <span><img src={Instagram} alt=""/> Username Sosial Media</span>
                                        <span><img src={Twiter} alt=""/> Username Sosial Media</span>
                                    </div>    
                                </div>
                            </div>
                            {/* <!-- dropdown --> */}
                            <button type="button" className="bt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Edit
                            </button>
                            {/* <!-- Modal --> */}
                            <div class="modal fade p-6 " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl" id = "cont-pop">
                                <div class="modal-content p-4 " id="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Edit Profil</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body ">
                                    <div class="inp-1">
                                        <div class="item-in">
                                        <label for="">First Name</label>
                                        <input type="text"/>
                                        </div>
                                        <div class="item-in">
                                        <label for="">Last Name</label>
                                        <input type="text"/>
                                        </div>
                                        <div class="item-in">
                                        <label for="">Nomor telepon</label>
                                        <input type="text"/>
                                        </div>
                                        <div class="item-in">
                                        <label for="">Email</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    <div class="inp-2">
                                        <div class="item-in">
                                        <label for="">Head Line</label>
                                        <input type="text"/>
                                        </div>
                                        <div class="item-in">
                                        <label for="">Alamat</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    <h6>Experience</h6>
                                    <div class="item-expe">
                                        <div class="cont-in-expe">
                                        <div class="inp-3">
                                            <div class="item-in">
                                            <label for="">Apa experience anda</label>
                                            <input type="text"/>
                                            </div>
                                        </div>
                                        <div class="inp-4">
                                            <div class="item-in">
                                            <label for="">Durasi</label>
                                            <input type="text"/>
                                            </div>
                                            <div class="item-in">
                                            <label for="">Lokasi</label>
                                            {/* <!-- dropdown-input --> */}
                                            <div class="dropdown">
                                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                                Kebutuhan
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Kerja</a></li>
                                                <li><a class="dropdown-item" href="#">Magang</a></li>                        
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="inp-5">
                                        <div class="item-in">
                                        <label for="">Education</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                    <button id="bt-cl" type="button"  data-bs-dismiss="modal">Cancel</button>
                                    <button id="bt-in" type="button" >Save</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- content mid --> */}
                    <div class="content-mid-profil">
                        <h4>Experience</h4>
                        <div class="con-mid-ex">
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div class="item-ex">
                            <img src={List} alt=""/>
                            <div class="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div class="content-bottom-profil">
                        <h4>Education</h4>
                        <div class="con-item-edu">
                        <div class="item-edu">
                        <img src={Edu} alt=""/>
                            <div class="des-itm">
                            <h5>Botcamp SIC Samsung</h5>
                            <h7>D3 Software Eginnering</h7>
                            <p>2017-2020</p>
                            </div>
                        </div>
                        <div class="item-edu">
                        <img src={Edu} alt=""/>
                            <div class="des-itm">
                            <h5>Botcamp SIC Samsung</h5>
                            <h7>D3 Software Eginnering</h7>
                            <p>2017-2020</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profil
