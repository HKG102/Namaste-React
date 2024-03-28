import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error page</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default ErrorComp;