import './App.scss';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}></Route>
        <Route path="Sobre" element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
