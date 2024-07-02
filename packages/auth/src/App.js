import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";


const generateClassName = createGenerateClassName({
    productionPrefix: "au"
})

const App = ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName} >
            <h1>Hello Auth</h1>
            <Router history={history}>
                <Switch >
                    <Route exact path="/auth/signup" >
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signin" >
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>


    </div>
}


export default App;