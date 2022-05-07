import { BrowserRouter, Switch, Route } from "react-router-dom"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import HomePage from "../Pages/HomePage/HomePage"



const Router = () => {

    

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router