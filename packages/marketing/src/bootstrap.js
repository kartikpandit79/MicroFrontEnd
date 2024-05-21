import React from "react";
import ReactDOM from "react-dom";
import App from "./App"


// mount func to start our app
const mount = (el) => {
    // ReactDOM.render(<h1>Hello there!</h1>, el)
    ReactDOM.render(<App />, el)
}

// if we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root")

    if (devRoot) {
        console.log("---env", (mount(devRoot)));
        mount(devRoot)
    }
}




// we are running through container we should export the mount function 
export { mount }