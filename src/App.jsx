import {ToastContainer, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Aside/>
      <div className="main-content">
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
      <ToastContainer transition={Bounce}/>
    </>
  );
}

export default App;
