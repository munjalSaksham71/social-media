import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LoginScreen/LoginScreen.css";
import { useAuth } from '../../context/auth-context';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { isUserLoggedIn, signupUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if(isUserLoggedIn) {
        navigate("/")
      }
    }, [isUserLoggedIn])

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!username || !password || !firstName || !lastName ){
            alert("Please enter All the fields");
        }
        try {
            await signupUser(username, password, firstName, lastName);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
    <div className="flex-column align-center">
      <form className="flex-column form-height">
        <div className="heading1 mt-3">Signup</div>
        <label className="mt-5" htmlFor="firstName">
          First Name: 
        </label>
        <input
          className="mt-1 p-1"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="mt-1" htmlFor="lastName">
          Last Name: 
        </label>
        <input
          className="mt-1 p-1"
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="mt-1" htmlFor="username">
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
      <button className="btn btn-primary mt-2" onClick={submitHandler}>Signup</button>
      <span className="mt-2">
        Already have an account?
        <Link to="/" className="ml-1 bolder primary-text ">
          Login here
        </Link>
      </span>
    </div>
  );
};

export { SignupScreen };
