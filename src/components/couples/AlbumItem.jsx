import NameComponent from '../NameComponent'
import { Link } from 'react-router-dom'
import ImageItem from './ImageItem'
import { useEffect } from 'react'

function AlbumItem( {album: { id: albumId, albumName, albumCover, totalImages, images }, coupleId, coupleName}) {


  useEffect(() => {
      // console.log(albumCover)
  }, [])

  return (

    <>


          <Link to={`/couple/${coupleId}/${albumId}`}>
            
            <div className='group relative overflow-hidden uppercase text-white text-3xl font-light rounded-lg'>

                {/* Item Image */}
                <img src={albumCover} alt="cover Img" className='w-full duration-200 md:block group-hover:scale-110' />

                {/* Item Gradient */}
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '>
                </div>

                {/* Item Image */}
                <h5 className='absolute inset-x-0 bottom-0 pl-6 pb-6'><NameComponent name={albumName} /></h5>

                {
                  images && images.map((image) => {
                    <ImageItem key={image.id} image={image} />
                })
                }

            </div>
          </Link>
    </>
  )
}

export default AlbumItem