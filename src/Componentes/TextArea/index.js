import './TextArea.css'

const TextArea = (props) => {

    const placeholderModified = `${props.placeholder}...`

    const whenDigited = (event) =>{

        props.whenDigited(event.target.value)

    }

    return (
        <div className='textArea'>

            <label>{props.label}</label>

            <input value={props.value} placeholder={placeholderModified} required={props.required} onChange={whenDigited}></input>

        </div>
    )

}

export default TextArea