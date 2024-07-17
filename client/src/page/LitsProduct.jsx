function ListProduct(params) {
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">--insert title---</h2>
                <p>--description insert--</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">--Link to bidding page--</button>
                </div>
            </div>
        </div>
    )
}

export default ListProduct