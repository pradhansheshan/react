import PropTypes from 'prop-types'
import NameComponent from '../NameComponent'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function CoupleItem({couple: {id, coupleName, active, coverImage}}) {

  // useEffect(() => {
  //   console.log(coupleName)
  // }, [])


  return (
    // <div className='container max-w6xl mx-auto my-32 px-6 md:px-0'>
    // {/* // <div className='card shadow-md compact side bg-base-100'> */}
    //     {/* <div className='flex-row items-center space-x-4 card-body'>
    //         <div>
    //             <div className='avatar'>
    //                 <div className='shadow w-14 h-14'>
    //                     <img src={coverImage} alt="coverImage" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div>
    //             <h2 className='card-title'>{coupleName}</h2>
    //         </div> 

    //     </div> */}

    <>
          
          <Link to={`/couple/${id}`}>
            <div className='group relative overflow-hidden uppercase text-white text-3xl font-light rounded-lg'>

                {/* Item Image */}
                <img src={coverImage} alt="cover Img" className=' w-full duration-200 md:block group-hover:scale-110' />

                {/* Item Gradient */}
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '>
                </div>

                {/* Item Image */}
                <h5 className='absolute inset-x-0 bottom-0 pl-6 pb-6'><NameComponent name={coupleName} /></h5>
            </div>
          </Link>
    </>
    // </div>
  )
}

export default CoupleItem