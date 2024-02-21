import Cards from '../Card'
import './Groups.css'

const Groups = (props) => {

    const css = {backgroundColor: props.secondaryColor}

    return (
        (props.users.length > 0) ? 
        <section className='group' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='Cards'>
                {props.users.map(user => <Cards name={user.username} job={user.job} image={user.image} />)}     
            </div>

        </section>: ''
        
    )

}

export default Groups