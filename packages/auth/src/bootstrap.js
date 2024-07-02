import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";


// mount func to start our app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    }); // memory history
    if (onNavigate) {
        history.listen(onNavigate)
    }
    // ReactDOM.render(<h1>Hello there!</h1>, el)
    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el)

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// if we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_auth-dev-root")

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}




// we are running through container we should export the mount function 
export { mount }