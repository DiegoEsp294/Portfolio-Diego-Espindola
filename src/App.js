import './App.css';
import Layout from "./components/layout"
import Work from "./components/Work"
import About from "./components/about"
import Skills from "./components/skills"
import Footer from "./components/Footer"

function App() {
  return (
    <Layout>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
