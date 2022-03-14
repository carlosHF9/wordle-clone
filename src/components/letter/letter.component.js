
const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    flex: '1',
    padding: '.5rem 0rem',
    borderRadius: '3px'
}


export default function Letter({children, value, onClick}) {




    

    return (
        <div style={baseStyle} onClick={() => onClick(value)}>{value}</div>
    )
}