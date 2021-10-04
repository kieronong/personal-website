import './App.css';
import Sidebar from './components/Sidebar.js'
import Cover from './components/Cover.js'
import About from './components/About.js'
import Gallery from './components/Gallery.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main>
        <Cover/>
        <About/>
        <Gallery/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
