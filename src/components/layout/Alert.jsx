import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"


function Alert() {

    const {alert} = useContext(AlertContext)

  return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' &&(
            <svg
                className="w-6 h-6 flex-none mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle cx='12' cy='12' r='12' fill="#FECDD3">

                </circle>
            </svg>
        )}
        <p>{alert.msg}</p>
    </p>
  )
}

export default Alert