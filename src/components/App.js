import "../styles/App.css";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Library from "../pages/Library";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import { useUser } from "../providers/UserProviders";
import Upgrade from "../pages/Upgrade";
import PremiumPlan from "../pages/PremiumPlan";
import AlbumSongs from "../pages/albumSongs";

function App() {

  const {getToken} = useUser();
  function ProtectedRoute({children}){
    if(getToken){
      return children;
    }else{
      return <Navigate to="/login"/>
    }
    
  }
  return (
    <>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/upgrade" element={<Upgrade/>}/>
        <Route path="/premiumplan" element={<PremiumPlan/>}/>
        <Route path="/album/:_id" element={<AlbumSongs/>}/>


        <Route path="/library" element={
        <ProtectedRoute>
          <Library/>
        </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  </>
  )
  
}

export default App;
