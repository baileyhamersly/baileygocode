import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
