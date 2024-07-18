import { Link } from "react-router-dom"

function ListProduct(params) {
    return (
        <div className="flex" style={{ height: '100vh', width: '100vw'}}>
            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-1 mt-4" style={{ height: "400px" }}>
                <figure>
                    <img style={{ width: "200px", height: "150px"}}
                        src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Laptop</h2>
                    <p>Barang langka</p>
                    <div className="card-actions justify-end">
                        <Link to={'/home'} className="btn btn-primary w-full">Mulai Bid</Link>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-4 mt-4" style={{ height: "400px"}}>
                <figure>
                <img style={{ width: "200px", height: "150px"}}
                        src="https://imgsrv2.voi.id/CiacwAwx-iV77CBgHB8jSx5GDO6hj8igNdZZhumKzXQ/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNzgyOTMvMjAyMjA2MTMxMDE0LW1haW4uY3JvcHBlZF8xNjU1MDkwMDkyLkpQRw.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Roket</h2>
                    <p>Roket NASA</p>
                    <div className="card-actions justify-end">
                    <button disabled className="btn btn-primary w-full">Selesai</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-4 mt-4" style={{ height: "400px"}}>
                <figure>
                <img style={{ width: "200px", height: "150px"}}
                        src="https://qph.cf2.quoracdn.net/main-qimg-5aacc6a64a1495db8d2f8e48413d8e54-lq"
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Tongkat</h2>
                    <p>Tongkat Nabi Musa</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary w-full">Selesai</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-4 mt-4" style={{ height: "400px"}}>
                <figure>
                <img style={{ width: "200px", height: "150px"}}
                        src="https://img.lazcdn.com/g/p/b670e9d2735d7e57576951da0817d15a.jpg_720x720q80.jpg"
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Gadget</h2>
                    <p style={{fontSize: '11px'}}>Baling-baling bambu Doraemon.</p>
                    <div className="card-actions justify-end">
                    <button disabled className="btn btn-primary w-full">Selesai</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-4 mt-4" style={{ height: "400px"}}>
                <figure>
                <img style={{ width: "200px", height: "150px"}}
                        src="https://cdnm.muslim.or.id/wp-content/uploads/2023/12/Kunci-Masuk-Surga.webp?strip=all&lossy=1&ssl=1"
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Kunci</h2>
                    <p style={{fontSize: '11px'}}>Kunci surga. Katanya sih asli.</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary w-full">Bid dimulai tahun 2045</button>
                    </div>
                </div>
            </div>

            

            {/* disini untuk nambahin card product baru, kalo ada */}
        </div>
    )
}

export default ListProduct