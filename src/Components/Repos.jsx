import { useState, useEffect } from 'react'


const Repos = () => {
    const [repositories, setRepositories] = useState([])
    const [filtroRepos, setFiltroRepos] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        async function getDados() {
            const response = await fetch('https://api.github.com/users/FeRaiza/repos')
            const dados = await response.json()
            setRepositories(dados)
        }
        getDados()
    },[])

    useEffect(()=>{
        setFiltroRepos(repositories.filter(
            repository =>{
                return repository.name.includes(busca)
            }
        ))
    },[busca, repositories])






    function handleText(e){
        setBusca(e.target.value)
    }
    return(
        <div>
            <h1>
                Meus repos:
            </h1>
            <input type="text" placeholder = "Digite um repo" onChange={handleText}></input>
            <ul>
                {
                    filtroRepos.map(repository=>{
                    return <li key={repository.id}>{repository.name}</li>
                    })
                }
            </ul>
        </div>
    )
}


export default Repos 