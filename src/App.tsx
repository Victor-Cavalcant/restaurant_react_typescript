import './App.css'
import Home from '/Users/victorcavalcanti/Desktop/projetos/type/src/components/Home.tsx'
import About from '/Users/victorcavalcanti/Desktop/projetos/type/src/components/About.tsx'
import Menu from '/Users/victorcavalcanti/Desktop/projetos/type/src/components/Menu.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;