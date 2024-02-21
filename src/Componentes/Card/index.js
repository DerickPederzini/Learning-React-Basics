import './card.css'

const Cards = (props) =>{

    return (
        <div className='card'>

            <div className='cabecalho'>
                <img src={props.image} alt={props.name}/>
            </div>

            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>

        </div>

    )

}

export default Cards