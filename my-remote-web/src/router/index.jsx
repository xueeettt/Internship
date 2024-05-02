import { useState, useCallback, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from '../pages/Bio';
import Home from '../pages/Home';
import Publication from '../pages/Publication';
import Contact from '../pages/Contact';
import Research from '../pages/Research';
import HeadNav from '../components/head-nav';
import BottomNav from '../components/bottom-nav';
import MenuPage from '../components/MenuPage';
import "./style.less";

const AppRouter = () => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 885);
  const [showLinks, setShowLinks] = useState(false);

  const updateScreenSize = useCallback(() => {
    setIsNarrowScreen(window.innerWidth < 885);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [updateScreenSize]);

  const handleMenuClick = () => {
    setShowLinks(false);
  };

  return (
    <Router>
      <HeadNav isNarrowScreen={isNarrowScreen} showLinks={showLinks} handleMenuClick={() => setShowLinks(!showLinks)} />
      {
        isNarrowScreen && showLinks ? (
          <div>
            <MenuPage onMenuItemClick={handleMenuClick} />
          </div>
        ) : (
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publication" element={<Publication />} />
              <Route path="/research/:researchId" element={<Research />} />
            </Routes>
          </div>
        )
      }
      {isNarrowScreen && !showLinks && <BottomNav/>}
      {!isNarrowScreen && <BottomNav/>}
    </Router>
  );
};

export default AppRouter;