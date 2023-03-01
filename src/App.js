import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <nav>
      <Header/>
      <Home/>
      <Projects/>
    </nav>
  );
}

export default App;
