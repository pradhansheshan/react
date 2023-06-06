import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import CoupleContext from "../context/couples/CoupleContext"
import ImageItem from "../components/couples/ImageItem"
import { Link } from "react-router-dom"
import CustomImageItem from "../components/couples/CustomImageItem"

function Image() {

  const {getAlbum, album, couple} = useContext(CoupleContext)

  const params = useParams()

  useEffect(() => {
    getAlbum(params.img)
    console.log(album.image)
  }, [])

  return (

    <>
        <div className="text-white text-4xl mb-16 flex space-x-6">
          <div>
            <Link to={`/couple/${couple.id}`}>
              {couple.coupleName}
            </Link>
          </div>
          <span> > </span>
          <div>{
            album.albumName
          }</div>
        </div>

        {/* <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-12 mx-4 mb-12">
        {album && album.images && album.images.map((image) => (
          <ImageItem key={image.id} image={image} />
          
        ))}
      </div> */}



      <div>
          <CustomImageItem images={album.image} />
      </div>
    </>
  )
}

export default Image

//  className="grid grid-cols-3 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 absolute inset-x-0 bottom-0"