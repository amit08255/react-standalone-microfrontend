import React from "react";
import useLoadScript from "./useLoadScript";

type Props = {
    url: string;
    elementName: string;
    props: { [key: string]: any };
    events: { [key: string]: (event: CustomEvent) => void };
}

const RemoteComponent = ({ url, elementName, props, events }:Props) => {
    const { loadScript } = useLoadScript();
    const ref:any = React.createRef();
    const remoteRef = React.useRef<any>({
        isComponentCreated: false,
    });

    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        loadScript(url, {}, () => {
            setIsLoaded(true);
        });
    }, []);

    React.useEffect(() => {
        if (isLoaded && ref.current) {
            Object.keys(events).forEach((eventName) => {
                ref.current.addEventListener(eventName, events[eventName]);
            });
        }
    }, [isLoaded]);

    if (isLoaded && !remoteRef.current.isComponentCreated) {
        remoteRef.current.isComponentCreated = true;
        return React.createElement(elementName, { ...props, ref });
    }

    return null;
};

export default RemoteComponent;