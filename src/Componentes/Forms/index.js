import './Forms.css'
import TextArea from '../TextArea'
import DropDownList from '../DropDownList'
import Button from '../Button'
import { useState } from 'react'

const Forms = (props) => {

    const jobs = [

        "Software Engineer",
        "Artist",
        "Dancer",
        "Web Developer",
        "Professional Gari",
        "World Class Chess GrandMaster",
        "Dolphin",
        "The Dog Sucking Mango",
        "Neymar",
        "Geoguessr Player",
        "No job",
        "Recepcionist at a Pharmacy at Saudi Arabia"

    ]

    const onSave = (event) =>{

        event.preventDefault()

        props.toSignedUpUser({
            username,
            password,
            job
        })

    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [job, setJob] = useState('')

    

    return (
        <section className='forms'>
            <form onSubmit={onSave}>    
                <h2>Preencha os dados para criar sua conta on this ReactProject</h2>

                <TextArea required={true} label='Username' placeholder="Digit your Username" value={username} whenDigited={value => setUsername(value)}/>
                
                <TextArea required={true} label='Password' placeholder="Digit your Password" value={password} whenDigited={value => setPassword(value)}/>
                
                <DropDownList label='Job' itens={jobs} value={job} whenDigited={value => setJob(value)} />
                <Button>
                    Criar Conta
                </Button>
            </form>
        </section>
    )

}

export default Forms