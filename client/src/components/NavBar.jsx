import { Link } from 'react-router-dom'
import logo from '../assets/logo2real.png'
import { alertSuccess } from '../utils/toastify'


function NavBar() {
    return (
        <div className="navbar bg-orange-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to={'/List'}>List Items</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost"><img src={logo} style={{width:'60px'}} /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>List Items</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link onClick={()=>{
                    localStorage.clear()
                    alertSuccess(`Sampai jumpa lagi.`)
                }} className="btn">Logout</Link>
            </div>
        </div>
    )
}

export default NavBar