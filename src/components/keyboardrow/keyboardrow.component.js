import Letter from "../letter/letter.component"



export default function KeyboardRow({keyboardRow}) {


    return (
        <div style={{display: 'flex', gap: '5px', justifyContent: "center", width: '100%'}}>
            {keyboardRow.map( letter => (
                <Letter value={letter.value} />
            ))}
        </div>
    )
}