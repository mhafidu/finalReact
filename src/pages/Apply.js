import React from 'react'
import '../Apply.css'

function Apply() {
    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        
        document.getElementById(cityName).style.display = "block"; 
      }
    return (
        <div className = "body-apply">
            <div className="containner-apply">
                {/* <!-- Navbar --> */}
                {/* <!-- main --> */}
                <main>
                {/* <!-- content-top --> */}
                    <div className="content-top">
                        <div className="background"></div>
                        <div className="document-user">
                            <div className="img-profil"></div>           
                            <div className="description-user">
                                    <h3><b>PT PERTAMINA</b></h3>
                                    <span>Bidang-</span>
                                    <span>lokasi</span>
                                    <a href="">kunjungi web</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-bot --> */}
                    <div className="content-bot">
                    {/* <!-- menu-com --> */}
                    <div className="menu1">
                        <button className="menu" onclick={openCity('London')}><b>About</b> </button>
                        <button className="menu" onclick={openCity('Paris')}><b>Jobs</b> </button>
                        <button className="menu" onclick={openCity('Tokyo')}><b>News</b> </button>
                    </div>
                    {/* <!-- list-item-menu --> */}
                    {/* <!-- item1 --> */}
                    <div id="London" className="w3-container city">
                        {/* <!-- about --> */}
                        <h2><b>About</b></h2>
                        <br/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        {/* <!-- about-com --> */}
                        <div className="des-com">
                        <div className="item-des-com">
                            <span>Bidang</span>
                            <span>Berdiri</span>
                            <span>Website</span>
                        </div>
                        <div className="item-des-com">
                            <span>Pangan</span>
                            <span>2005</span>
                            <span><a href="">www.blabla.com</a></span>
                        </div>
                        </div>
                    </div>
                    {/* <!-- item2 --> */}
                    <div id="Paris" className="w3-container city" style={{display:"none"}}>
                        {/* <!-- jobs --> */}
                        <h2><b>Jobs</b></h2>
                        <br/>
                        {/* <!-- acordion-jobs --> */}
                        <div className="accordion " id="accordionExample" >
                        <div className="accordion-item border-0 uwu" style={{borderRadius: "20px"}}>
                            {/* <!-- title-job --> */}
                            <div className="accordion-body jobs" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs ">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- condition-acor --> */}
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat pkl</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply">APPLY</button> 
                                </div>
                            </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTOne">
                            <b>Show More</b> 
                            </button>
                            </h2>
                        </div>
                        {/* <!-- title-job --> */}
                        <div className="accordion-item border-0 uwu">
                            <div className="accordion-body jobs" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- condition-acor --> */}
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat pkl</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply">APPLY</button></div>                    
                                </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                                <b>Show More</b>
                            </button>
                            </h2>
                        </div>
                        {/* <!-- title-jobs --> */}
                        <div className="accordion-item border-0 uwu" style={{borderRadius: "20px"}}>
                            <div className="accordion-body jobs" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- contition-acor --> */}
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat pkl</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >APPLY</button></div>
                                </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b>Show More</b>
                            </button>
                            </h2>
                        </div>
                        </div>
                        {/* <!-- Modal --> */}
                        <div className="modal fade p-6 " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" id = "cont-pop">
                            <div className="modal-content p-4 " id="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Profil</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                                <button type="button" className="btn btn-outline-primary">Primary</button>
                            </div>
                            <div className="modal-footer">
                                <button id="bt-cl" type="button"  data-bs-dismiss="modal">Cancel</button>
                                <button id="bt-in" type="button" >Save</button>
                            </div>
                            </div>
                        </div>
                        </div>
                            </div>
                    {/* <!-- item3 --> */}
                    <div id="Tokyo" className="w3-container city" style={{display:"none"}}>
                        {/* <!-- news --> */}
                        <h2><b>News</b></h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos sapiente dicta. Sunt hic illum dicta ducimus consectetur, voluptatem error nostrum et cum distinctio voluptatibus suscipit temporibus sapiente totam tenetur!</p>
                    </div>
                    
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Apply
