import { Link } from "react-router-dom"

function ListProduct(params) {
    return (
        <div>


            <div className="card bg-base-100 w-72 shadow-xl p-6 ms-4">
                <figure>
                    <img
                        src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Laptop</h2>
                    <p>Barang langka</p>
                    <div className="card-actions justify-end">
                        <Link to={'/home'} className="btn btn-primary">Mulai Bid</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProduct