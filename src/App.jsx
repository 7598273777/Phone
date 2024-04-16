import { Routes, Route } from "react-router-dom";
import Store from "./Pages/Store";




function App() {
  return (
    <Routes>
          <Route Component={Store} path="/" />          
    </Routes>
  );
}

export default App;
