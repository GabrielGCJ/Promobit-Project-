import { BrowserRouter, Switch, Route } from "react-router-dom"
import { DetailsPage } from "../Pages/DetailsPage/DetailsPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import HomePage from "../Pages/HomePage/HomePage"


const Router = () => {    

    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/detalhes-filmes/:id">
                    <DetailsPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router