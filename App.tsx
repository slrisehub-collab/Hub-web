import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import SDGs from './components/SDGs';
import Programs from './components/Programs';
import Opportunities from './components/Opportunities';
import Media from './components/Media';
import Partners from './components/Partners';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Impact />
        <About />
        <SDGs />
        <Programs />
        <Opportunities />
        <Media />
        <Partners />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;