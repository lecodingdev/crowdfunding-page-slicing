import React from 'react'
import logo from '../assets/images/logo.svg'


const Navbar = () => {
  return (
    <nav className=" absolute w-full flex justify-between py-7 px-6">
        <img src={logo} />

        <div className="relative w-6 h-6 flex flex-col justify-around">
            <div className="p-0.5 bg-white"></div>
            <div className="p-0.5 bg-white"></div>
            <div className="p-0.5 bg-white"></div>
        </div>
    </nav>
    )
}

export default Navbar