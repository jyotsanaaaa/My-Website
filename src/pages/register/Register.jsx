import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Inner     Circle</h1>
                    <p>Welcome to InnerCircle, the social media app that brings you closer to the people and things you love. Connect with friends, family, and like-minded individuals, and stay up-to-date with the latest news and trends. Join our community today and start exploring endless possibilities </p>
                    <span>Already have an account?</span>
                    <Link to= "/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;