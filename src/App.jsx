import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./assets/styles.css";
import GitIgnore from './components/GitIgnore';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/git-ignore" element={<GitIgnore />} />
      </Routes>
    </Router>
  );
};

export default App;

