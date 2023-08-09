import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hey There!</h1>
                    <p>Welcome to InnerCircle, the social media app that brings you closer to the people and things you love. Connect with friends, family, and like-minded individuals, and stay up-to-date with the latest news and trends. Join our community today and start exploring endless possibilities </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>  
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;