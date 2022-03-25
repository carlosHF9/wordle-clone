import { useContext } from "react"
import { X } from "react-feather"
import { GlobalContext } from "../../App"
import './style.css'




export default function Modal({ children, name}) {
    
    const { state, dispatch } = useContext(GlobalContext)

    function CloseModal () {
        dispatch({type: 'CLOSE_MODAL', modalName: name})
    }

    if(state[name]) {
        return (
            <div className="modal-container"  onClick={ (e) => {
                if(e.target.className === 'modal-container') {
                    CloseModal()
                }
            }} >
                <div className="modal-dialog-box">
                    <X className="close-button" onClick={ () => CloseModal()}/>
                    {children}
                </div>
            </div>
        )
    }

    return '';
}