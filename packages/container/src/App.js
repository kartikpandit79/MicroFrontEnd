import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./Components/Header";
// import MarketingApp from "./Components/MarketingApp";
// import AuthApp from "./Components/AuthApp";

const MarketingApp = lazy(() => import("./Components/MarketingApp"))
const AuthApp = lazy(() => import("./Components/AuthApp"))

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const App = () => {
    const [isSignedIn, setSignedIn] = useState(false);
    console.log("isSignedIn", isSignedIn);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>

                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth" >
                                <AuthApp onSignIn={() => setSignedIn(true)} />
                            </Route>
                            <Route path="/" >
                                <MarketingApp />
                            </Route>
                            <MarketingApp />
                            <AuthApp />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;