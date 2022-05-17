import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { api_key, BASE_URL } from "../../Constants"
import { useRequestData } from "../../Hooks/UseRequestData"
import { goToMovieDetails } from "../../Routes/Coordinator"
import { CardMovie, ContainerCardMovie, ContainerButton } from "./styled"


const HomePage = () => {

    const history = useHistory()

    const [ pagina, setPagina ] = useState(1)

    

    const alterarProximaPagina = ( num ) => {
        setPagina(pagina + num)
    }

    const alterarPaginaAnterior = ( num ) => {
        if(pagina >= 2){
            setPagina(pagina - num)
        }
    }

    const showMovies = useRequestData ([],`${BASE_URL}/popular?${api_key}&language=en-US&page=${pagina}`)

    console.log(showMovies)
    
    const showCardMovie = showMovies.map((movie) => {

        return(
            <CardMovie key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} onClick={() => goToMovieDetails(history, movie.id)}/>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
            </CardMovie>
        )
    })


    return(
        <div>
            <ContainerCardMovie>
                {showCardMovie}
            </ContainerCardMovie>
            <ContainerButton>
            <button onClick={(() => {alterarPaginaAnterior(1)})}>Voltar</button>
            <button onClick={(() => {alterarProximaPagina(1)})}>Próximo</button>
            </ContainerButton>
        </div>
    )
}

export default HomePage