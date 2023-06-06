import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import CoupleContext from "../context/couples/CoupleContext"
import AlbumItem from "../components/couples/AlbumItem"

function Couple() {

  const {getCouple, couple} = useContext(CoupleContext)

  const params = useParams()

  useEffect(() => {
    getCouple(params.login)
    // console.log(couple.albums)
  }, [])

  return (
        <div className="">
          <div className="text-white text-4xl mb-16">{
            couple.coupleName
          }</div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-12 mx-4 mb-12">
            {couple && couple.albums && couple.albums.map((album) => (
              <AlbumItem key={album.id} album={album} coupleId={couple.id} coupleName={couple.coupleName} />
            ))}
        </div>
      </div>
  )
}

export default Couple

//  className="grid grid-cols-3 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"