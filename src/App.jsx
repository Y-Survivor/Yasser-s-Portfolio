import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import RightSideBar from './layouts/RightSidebar/RightSidebar';
import LeftSideBar from './layouts/LeftSidebar/LeftSidebar';
import Spinner from './components/reusable/Spinner';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
// const ProjectSingle = lazy(() => import('./pages/sections/ProjectSingle.jsx'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const spinnerDuration = 2000; // Duration of the spinner animation in milliseconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, spinnerDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Spinner />}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <AppHeader />
              <RightSideBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                {/* <Route path="projects/single-project" element={<ProjectSingle />} /> */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
              <LeftSideBar />
              <AppFooter />
            </>
          )}
        </Suspense>
        <UseScrollToTop />
      </Router>
    </div>
  );
}

export default App;
