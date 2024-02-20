import './DropDownList.css'

const DropDownList = (props) => {

    return(

        <div className='dropDown'> 
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.whenDigited(event.target.value)}>
                {props.itens.map(item => 
                <option key={item}>{item}</option> )}
            </select>
        </div>

    )

}

export default DropDownList