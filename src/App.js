import { Route, Routes } from "react-router-dom";
import "./App.css";
import {LoginScreen, SignupScreen, HomeScreen, UserScreen} from "./Screens/index";
import MockMan from "mockman-js";
import Header from "./Components/Header/Header";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><UserScreen /></PrivateRoute>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
