import React from "react";
import useLoadScript from "./useLoadScript";

type Props = {
    url: string;
    elementName: string;
    props: { [key: string]: any };
    events: { [key: string]: (event: CustomEvent) => void };
}

const RemoteComponent = ({ url, elementName, props, events }:Props) => {
    const ref:any = React.createRef();
    const [isLoaded, setIsLoaded] = React.useState(false);

    useLoadScript(url, {}, (err:any) => {
        if (!err) {
            setIsLoaded(true);
        }
    });

    React.useEffect(() => {
        if (isLoaded && ref.current) {
            Object.keys(events).forEach((eventName) => {
                ref.current.addEventListener(eventName, events[eventName]);
            });
        }
    }, [isLoaded]);

    if (isLoaded) {
        return React.createElement(elementName, { ...props, ref });
    }

    return null;
};

export default RemoteComponent;