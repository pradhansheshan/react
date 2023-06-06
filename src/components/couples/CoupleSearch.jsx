import { useState, useContext } from "react"
import CoupleContext from "../../context/couples/CoupleContext"


function CoupleSearch() {

    const [text, setText] = useState('')

    const {couples, searchCouples} = useContext(CoupleContext)

    const handleChange = (e) => {
        console.log(couples)
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text == '') {
            alert('Please enter something', 'error')
        } else {
            searchCouples(text)
            setText('')
        }
    }

  return (
    <div className="flex mb-8 z-0">
        <div className="flex-grow">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input className="w-full pr-40 bg-gray-200 input input-lg text-black" type='text' placeholder="Search"
                        value={text}
                        onChange={handleChange}/>
                        <button className="absolute top-0 right-0 rounded-l-none rounded-r w-36 btn btn-lg" type="submit">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {/* { couples.length > 0 && (
            <div>
                <button className="btn btn-ghost btn-lg">
                    Clear
                </button>
            </div>
        )} */}

        
    </div>
  )
}

export default CoupleSearch


//  <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
// replace the above line with line having <div className="flex mb-8">