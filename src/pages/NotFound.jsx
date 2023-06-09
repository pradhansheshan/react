import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
        <div className='text-center hero-content'>
          <div className='max-w-lg'>
            <h1 className='text-4xl font-bold mb-6'>
              Oops!
            </h1>
            <p className='text-2xl mb-6'>
              404 - Page not found!
            </p>
            <Link to='/' className='btn btn-primary btn-lg'>
              <FaHome className='mr-2' />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default NotFound