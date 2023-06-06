import {FaGithub, FaBars, FaWindowClose} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Navbar({title}) {

    const[open, setOpen] = useState(false);

    const handleToggleMenu = () => {
    setOpen(!open);
    };

  return (

    <div className='navbar fixed mb-12 shadow-lg bg-slate-800 text-neutral-content'>
        <div className='container mx-auto justify-between md:px-10 py-4 px-7 md:flex'>

                {/* Logo and Website Name */}
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>

                {/* Menu Icon */}

                <div className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open
                        ? <FaWindowClose className='h-8 w-8' /> 
                        : <FaBars
                        className='h-8 w-8'
                        onClick={handleToggleMenu}
                        />
                    }
                    
                    
                </div>

                {/* Navigation Link */}
                <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-slate-800 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    <li className='font-semibold my-3 md:my-0 md:ml-8'>
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                        </Link>
                    </li>
                    <li className='font-semibold my-3 md:my-0 md:ml-8'>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                        About
                       </Link>
                    </li>
                    <li className='font-semibold  md:my-0 md:ml-8'>
                        <Link to='/contact' className='btn btn-ghost btn-sm rounded-btn'>
                        Contact
                        </Link>
                    </li>
                </ul>



        </div>
    </div>

  )
}

Navbar.defaultProps = {
    title: 'CoupleHub',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar