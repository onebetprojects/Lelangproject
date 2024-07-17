import logo from '../assets/logo2real.png'

function LandingPage() {
    return (

            <div className="hero bg-orange-500 min-h-screen w-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="Username" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Masuk</button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center mr-10">
                        <div>
                        <h1 className="text-4xl font-extrabold font-serif text-black">Login now!</h1>
                        </div>
                        <div className=' bg-black border-5 rounded mt-3'>   
                        <img src={logo} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

/*<img src={logo} alt="" />

*/

export default LandingPage