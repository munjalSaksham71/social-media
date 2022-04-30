import { Route, Routes } from "react-router-dom";
import "./App.css";
import {LoginScreen} from "./Screens/LoginScreen/LoginScreen";
import MockMan from "mockman-js";
import Header from "./Components/Header/Header";
import { SignupScreen } from "./Screens/SignupScreen/SignupScreen";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
