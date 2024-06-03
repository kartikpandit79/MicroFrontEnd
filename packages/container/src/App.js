import React from "react";
import { BrowserRouter } from "react-router-dom"
import MarketingApp from "./Components/MarketingApp";
import Header from "./Components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";


const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;