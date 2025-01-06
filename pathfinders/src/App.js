import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home.js';
import Error404 from './pages/Error404.js';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
