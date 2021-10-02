import './App.css';
import Sidebar from './components/Sidebar.js'
import Cover from './components/Cover.js'
import About from './components/About.js'
import Gallery from './components/Gallery.js'
/*
import Experiences from './components/experiences'
*/

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main>
        <Cover/>
        <About/>
        <Gallery/>
      </main>
    </div>
  );
}

export default App;
