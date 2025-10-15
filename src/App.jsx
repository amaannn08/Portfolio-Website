import { ReactTyped } from "react-typed";
import Home from "./Components/Home/Home";
import Taskbar from "./Components/Taskbar/Taskbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="flex h-screen">
      <div className="w-[200px] bg-[#ededed]">
          <Taskbar></Taskbar>
      </div>
      <div className="flex bg-gray-100 flex-col flex-1">
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
