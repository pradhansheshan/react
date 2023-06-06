import { useState, useEffect } from "react"
import { FaWindowClose, FaChevronLeft, FaChevronRight } from "react-icons/fa"


function CustomImageItem({images}) {

    const[slideNumber, setSlideNumber] = useState(0)
    const[openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    const prevSlide = () => {
        slideNumber === 0
        ? setSlideNumber(images.length -1)
        : setSlideNumber(slideNumber - 1)
    }

    const nextSlide = () => {
        slideNumber + 1 === images.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }


  return (
    <div>

        { openModal &&
            <div className="fixed top-0 bottom-0 left-0 right-0 py-24 bg-black flex flex-col items-center justify-center gap-8 max-w-full h-full overflow-hidden z-40">
            <FaChevronLeft className="text-4xl cursor-pointer fixed inset-y-50 left-0" onClick={prevSlide} />
            
            <img src={images[slideNumber].imgName} alt="full screen image" className="max-h-screen" />
            
            <FaChevronRight className="text-4xl cursor-pointer fixed inset-y-50 right-0" onClick={nextSlide} />
            <FaWindowClose className="fixed top-0 right-0 text-4xl cursor-pointer" onClick={handleClose} />
        </div>
        
        }


        <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6 mx-4 mb-12">
            {
                images && images.map((item, index) =>{
                    return(
                        <div 
                            className=" cursor-pointer"
                            key={index}
                            onClick={() => handleOpenModal(index)}
                            >
                                <img src={item.imgName} alt='individual'
                                className=" hover:scale-105" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CustomImageItem

// FaChevronLeft, FaChevronRight, FaRegWindowClose, FaWindowClose, FaClosedCaptioning, FaDoorClosed

