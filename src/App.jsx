import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import OverView from "./Pages/OverView";
import LogUser from "./Authentication/LogUser";
import SignUser from "./Authentication/SignUser";
import UpdateProfile from "./Pages/UpdateProfile";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<OverView/>} />
         <Route path="/login" element={<LogUser/>} />
         <Route path="/sign" element={<SignUser/>} />
         <Route path="/setting" element={<Settings/>} />
         <Route path="/analytics" element={<Analytics/>} />
         <Route path="/updateProfile/:id" element={<UpdateProfile/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

