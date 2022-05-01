import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { useAuth } from '../../context/auth-context';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, loginUser } = useAuth();
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!username || !password ){
          console.log("Please enter both the fields");
        }
        try {
            await loginUser(username, password);
        } catch (error) {
            console.error(error.message)
        }
    }

    const guestLoginHandler = async (e) => {
      e.preventDefault();
      try {
          await loginUser("adarshbalika", "adarshBalika123");
      } catch (error) {
          console.error("Something went wrong.")
      }
    }

    return (
    <div className="flex-column align-center">
      <form className="flex-column form-height">
        <div className="heading1 mt-3">LOGIN</div>
        <label className="mt-5" htmlFor="username">
          Username
        </label>
        <input
          className="mt-1 p-1"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input
          className="mt-1 p-1"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="flex-column links">
        <div className="flex-row mt-3">
        <button className="btn btn-primary" onClick={submitHandler}>Login</button>
        <button className="btn btn-outline-primary ml-2" onClick={guestLoginHandler}>Continue as Guest</button>
        </div>
      <span className="mt-2">
        New Customer?
        <Link to="/signup" className="ml-1 bolder primary-text">
          Register here
        </Link>
      </span>
      </div>
    </div>
  );
};

export { LoginScreen };
