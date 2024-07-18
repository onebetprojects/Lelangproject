import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo2real.png'
import logo2 from '../assets/logo3realv2.png'
import { useState } from 'react'
import { alertSuccess } from '../utils/toastify'

function LandingPage() {
    const [username,setusername] = useState("")
    let navigate = useNavigate()

    const handlelogin = () =>{ 
        localStorage.setItem('username',username)
        navigate('/list')
        alertSuccess(`Selamat datang ${username}!`)
    }
    return (

            // <div className="hero bg-orange-500 min-h-screen w-screen">
            <div className="hero min-h-screen w-screen" style={{ backgroundColor: 'black'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" >
                        <form onSubmit={handlelogin} className="card-body" style={{ height: '40vh'}}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input value={username} onChange={(e) =>{ setusername(e.target.value) }} type="text" placeholder="Masukkan username anda" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Masuk</button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center mr-10">
                        <div>
                        <h1 className="text-4xl font-extrabold font-serif text-black" style={{ marginLeft: '50px'}}>Login now!</h1>
                        </div>

                        <div className=' bg-black border-5 rounded mt-3'>   
                        <img src={logo2} alt="" />

                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

/*<img src={logo} alt="" />

*/

export default LandingPage