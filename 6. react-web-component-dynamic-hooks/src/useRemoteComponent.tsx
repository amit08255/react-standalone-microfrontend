import React from "react";
import useLoadScript from "./useLoadScript";

type Props = {
    url: string;
    events: { [key: string]: (event: CustomEvent) => void };
}

const useRemoteComponent = ({ url, events }:Props) => {
    const { loadScript } = useLoadScript();
    const ref:any = React.createRef();

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

    return ({ isLoaded, ref });
};

export default useRemoteComponent;