import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <div className="bg-[#0c0a09] ">
    <ToastContainer/>
    <App />
  </div>
);
