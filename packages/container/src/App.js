import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./Components/Header";
import { createBrowserHistory } from "history"
// import MarketingApp from "./Components/MarketingApp";
// import AuthApp from "./Components/AuthApp";

const MarketingApp = lazy(() => import("./Components/MarketingApp"))
const AuthApp = lazy(() => import("./Components/AuthApp"))
const DashboardApp = lazy(() => import("./Components/Dashboard"))

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const history = createBrowserHistory();


const App = () => {
    const [isSignedIn, setSignedIn] = useState(false);
    console.log("isSignedIn", isSignedIn);

    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard")
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>

                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth" >
                                <AuthApp onSignIn={() => setSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard" >
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardApp />
                            </Route>
                            <Route path="/" >
                                <MarketingApp />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App;