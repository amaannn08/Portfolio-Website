import { ReactTyped } from "react-typed";
import Home from "./Components/Home/Home";
import Taskbar from "./Components/Taskbar/Taskbar";


function App() {
  return (
    <div className="flex h-screen">
      <div className="w-[200px] bg-[#ededed]">
          <Taskbar></Taskbar>
      </div>
      <div className="flex-1">
        <Home></Home>
      </div>
    </div>
  )
}

export default App
