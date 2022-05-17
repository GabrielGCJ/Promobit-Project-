export const goToMovieDetails = (history, id) => {
    history.push(`/detalhes-filmes/${id}`)
}

export const goToBananinha = (history) => {
    history.goBack()
}