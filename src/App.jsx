import './App.css'

import { Outlet } from "react-router-dom";
import Rodape from './components/Rodape';

function App() {

  return (
    <>
        <Menu/>
        <Outlet/>
        <Rodape/>
    </>
  )
}

export default App