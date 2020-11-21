import { useState, useEffect } from 'react'

export default function Repositories(){
    const [repositories, setRepositories] = useState([])
    useEffect(() =>{
        async function getDados(){
            const response = await fetch('https://api.github.com/users/FeRaiza/repos')
            const dados = await response.json()

            setRepositories(dados)
        }
        getDados()
    },[])
    return (
        <div>
            <h1>
                Portfólio retornado: {repositories.length}
            </h1>
            <ul>
                {repositories.map(repository=>{
                    return <li key={repository.id}>{repository.name}</li>
                })}
            </ul>
        </div>
    )
}