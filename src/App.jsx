import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from "./components/Model";
import Bottom from './components/BottomNavbar';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      {/* <Hero /> */}
      {/* <Highlights /> */}
      <Model />
      <Bottom/>
    </main>
  )
}

export default Sentry.withProfiler(App);
