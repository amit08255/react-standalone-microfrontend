import React from "react";
import useLoadScript from "./useLoadScript";

type Props = {
    url: string;
    elementName: string;
    props: { [key: string]: any };
}

const RemoteComponent = ({ url, elementName, props }:Props) => {
    const ref:any = React.useRef(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    useLoadScript(url, {}, (err:any) => {
        if (!err) {
            setIsLoaded(true);
        }
    });

    if (isLoaded) {
        return React.createElement(elementName, { ...props, ref });
    }

    return null;
};

export default RemoteComponent;