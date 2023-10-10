import { Link } from "react-router-dom";


const ErrorRoute = () => {
    return (
        <div className="text-center mt-20">
            <h2>404 page not found!!!</h2>
            <button className="btn"><Link to={'/'}>Back</Link></button>
        </div>
    );
};

export default ErrorRoute;