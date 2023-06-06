import { useEffect, useContext } from "react"
import CoupleItem from "./CoupleItem"
import CoupleContext from '../../context/couples/CoupleContext'

function CoupleResults() {

    const {couples, loading, fetchCouples} = useContext(CoupleContext)
    

    useEffect(() => {
        fetchCouples()
    }, [])

    

  if(!loading) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-12 mx-4 mb-12">
                {couples.map((couple) => (
                    <CoupleItem key={couple.id} couple={couple} />
                ))}
        </div>
      )
  } else {
    return <h3>Loading...</h3>
  }

}

export default CoupleResults



// className="grid grid-cols-3 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"