
const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    flex: '1',
    maxWidth: '40px',
    padding: '.5rem 0rem'
}


export default function Letter({children, value}) {



    return (
        <div style={baseStyle}>{value}</div>
    )
}