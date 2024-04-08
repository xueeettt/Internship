import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from '../pages/Bio';
import Home from '../pages/Home';
import Publication from '../pages/Publication';
import Contact from '../pages/Contact';
import Research from '../pages/Research';
import HeadNav from '../components/head-nav';
import BottomNav from '../components/bottom-nav';
import "./style.less";

const AppRouter = () => {
  return (
    <Router>
      <HeadNav/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
      <BottomNav/>
    </Router>

  );
};

export default AppRouter;