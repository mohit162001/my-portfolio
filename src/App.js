import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Portfolio from './component/portfolio/Portfolio';
import Skills from './component/skills/Skills';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
