import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./src/Pages/Home";
import HjSystemsPage from "./src/Components/Hjsystems";



export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/Hjsystems" element={ <HjSystemsPage />} />
        </Routes>
      </BrowserRouter>
    );
}
