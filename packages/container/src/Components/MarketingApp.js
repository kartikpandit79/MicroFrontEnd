import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingIndex";
import { useHistory } from "react-router-dom";


export default () => {
    const ref = useRef(null);
    const history = useHistory(); // browser history


    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname != nextPathname) {
                    history.push(nextPathname);
                }
            }
        })

        history.listen(onParentNavigate)
    }, [])

    return (
        <div ref={ref}>
        </div>
    )
}