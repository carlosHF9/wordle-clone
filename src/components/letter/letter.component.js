import { letterStyleState } from "../letterinput/letterinput.component"


const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    flex: '1',
    padding: '.8rem 0rem',
    borderRadius: '3px'
}


export default function Letter({children, value, onClick, status}) {

    return (
        <div style={{...baseStyle, ...letterStyleState[status]}} onClick={() => onClick(value)}>{value}</div>
    )
}