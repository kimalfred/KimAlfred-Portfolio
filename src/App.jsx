import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import AllProjectsPage from './components/AllProjectsPage';
import CertificatesPage from './components/CertificatesPage';
import AllCertificatesPage from './components/AllCertificatesPage';
import Footer from './components/Footer';
import Antigravity from './components/Antigravity';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <div className={`fixed top-0 left-0 w-screen h-screen -z-20 transition-colors duration-500 ${isDark ? 'bg-[#09090b]' : 'bg-[#fafafa]'}`} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none' }}>
        <Antigravity
          count={600}
          magnetRadius={3}
          ringRadius={4}
          waveSpeed={0.6}
          waveAmplitude={1}
          particleSize={1}
          lerpSpeed={0.05}
          color="#ef4444"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProfilePage isDark={isDark} setIsDark={setIsDark} />
              <AboutPage isDark={isDark} />
              <SkillsPage isDark={isDark} />
              <ProjectsPage isDark={isDark} />
              <CertificatesPage isDark={isDark} />
              <Footer isDark={isDark} />
            </>
          }
        />

        <Route
          path="/allprojects"
          element={<AllProjectsPage isDark={isDark} />}
        />

        <Route
          path="/allcertificates"
          element={<AllCertificatesPage isDark={isDark} />}
        />
      </Routes>
    </>
  );
};

export default App;
