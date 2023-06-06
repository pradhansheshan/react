import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../../pages/Image'
import NameComponent from '../NameComponent'

function ImageItem( {image : {id, imgName}} ) {



  return (
      <>
            <div className='group relative overflow-hidden uppercase text-white text-3xl font-light rounded-lg'>

                {/* Item Image */}
                <img src={imgName} alt="individual image" className='w-full duration-200 md:block group-hover:scale-110' />

            </div>
      </>
  )
}

export default ImageItem