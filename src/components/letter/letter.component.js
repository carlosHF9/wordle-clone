
const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    flex: '1',
    padding: '.8rem 0rem',
    borderRadius: '3px'
}


export default function Letter({children, value, onClick}) {




    

    return (
        <div style={baseStyle} onClick={() => onClick(value)}>{value}</div>
    )
}