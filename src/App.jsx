import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Home,
  About,
  Courses,
  Teacher,
  Contact,
  Footer
} from "./components/index";

import LoadingScreen from './components/container/LoadingScreen/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={loading ? "hidden" : "font-poppins bg-Solitude"}>
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Teacher />
        <Contact />
        <Footer />
      </div>
      {loading && <LoadingScreen />}
    </>
  );
};

export default App;
