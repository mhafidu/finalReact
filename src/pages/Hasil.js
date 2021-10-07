import React from 'react'
import '../Hasil.css'


function Hasil() {
    return (
        <div className = "body-hasil container-fluid" >
            <main className='main-hasil container p-4' style={{maxWidth:"60%"}}>
                <h4>Hasil</h4>
                <hr/>
                <div className="list-hsl container" style={{maxWidth:"100%"}}>
                    <div className="list-hasil container" style={{maxWidth:"100%"}}>
                        <div className="image-hasil container" style={{maxWidth:"25%"}}>
                            <img src="https://source.unsplash.com/random/151x151" alt=""/>                        
                        </div>
                        <div className="deskripsi-hasil container" style={{maxWidth:"75%"}}>
                        <h5>PT.Pertamina</h5>
                        <p>Berdasarkan hasil sesi wawancara dan tes kualifikasi yang telah dilaksanakan pada tanggal 28 Mei 2021 maka dengan ini, kami  dari PT. Pertamina bermaksud untuk meberikan surat ...</p>
                        <div className="status-bottom-hasil">
                            <label for="">Status :</label>
                            <span>Diterima</span>
                            <p>09-06-2021</p>
                        </div>
                        </div>
                    </div>
                    <div className="list-hasil container" style={{maxWidth:"100%"}}>
                        <div className="image-hasil container" style={{maxWidth:"25%"}}>
                            <img src="https://source.unsplash.com/random/151x151" alt=""/>                        
                        </div>
                        <div className="deskripsi-hasil container" style={{maxWidth:"75%"}}>
                        <h5>PT.Pertamina</h5>
                        <p>Berdasarkan hasil sesi wawancara dan tes kualifikasi yang telah dilaksanakan pada tanggal 28 Mei 2021 maka dengan ini, kami  dari PT. Pertamina bermaksud untuk meberikan surat ...</p>
                        <div className="status-bottom-hasil">
                            <label for="">Status :</label>
                            <span>Diterima</span>
                            <p>09-06-2021</p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hasil
