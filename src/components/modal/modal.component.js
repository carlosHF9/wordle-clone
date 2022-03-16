import { useContext } from "react"
import { GlobalContext } from "../../App"
import './style.css'


export default function Modal({ children, name}) {
    
    const { state, dispatch } = useContext(GlobalContext)

    function CloseModal () {
        dispatch({type: 'CLOSE_MODAL', modalName: name})
    }

    if(state[name]) {
        return (
            <div className="modal-container" onClick={() => CloseModal()}>
                <div className="modal-dialog-box">
                    {children}
                </div>
            </div>
        )
    }

    return '';
}