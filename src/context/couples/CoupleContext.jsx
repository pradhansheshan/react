import { createContext, useReducer } from "react"
import coupleReducer from './CoupleReducer'

const CoupleContext = createContext()

const COUPLE_URL = process.env.REACT_APP_URL

export const CoupleProvider = ({children}) => {



    const initialState = {
        couples: [],
        couple: {},
        album: {},
        loading: true
    }
    
    const [state, dispatch] = useReducer(coupleReducer, initialState)


    const fetchCouples = async () => {
        const response = await fetch(`${COUPLE_URL}/couples`)
        const data = await response.json()

        dispatch({
            type: 'GET_COUPLES',
            payload: data,
        })
    }

    // Get Search Results

    const searchCouples = async (text) => {

        const params = new URLSearchParams({
            name: text
        })

        const response = await fetch(`${COUPLE_URL}/search?${params.toString()}`)
        const {couples} = await response.json()

        dispatch({
            type: 'GET_COUPLES',
            payload: couples,
        })
    }

    // Get single couple

    const getCouple = async (login) => {

        const response = await fetch(`${COUPLE_URL}/couple/${login}`)

        if(response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_COUPLE',
                payload: data,
            })
        }

    }

    // Get single couple

    const getAlbum = async (img) => {

        const response = await fetch(`${COUPLE_URL}/album/${img}`)

        if(response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_ALBUM',
                payload: data,
            })
        }

    }



    return (
    <CoupleContext.Provider value={{
                couples: state.couples,
                loading: state.loading,
                couple: state.couple,
                album: state.album,
                fetchCouples,
                searchCouples,
                getCouple,
                getAlbum,
    }}>
         {children}
    </CoupleContext.Provider>
    )
}

export default CoupleContext