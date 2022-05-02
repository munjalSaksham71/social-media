import { Route, Routes } from "react-router-dom";
import "./App.css";
import {LoginScreen, SignupScreen, HomeScreen} from "./Screens/index";
import MockMan from "mockman-js";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
