import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Common from "./Common/Common";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes> 
          <Route path="/" element={<Common/>} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup/>}/>
        </Routes> 
      </BrowserRouter>
    </div>



  )
}

export default App;
