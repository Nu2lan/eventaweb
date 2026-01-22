import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { RequestProposal } from './pages/RequestProposal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  const location = useLocation();
  const isRequestPage = location.pathname === '/request';

  return (
    <div className={`min-h-screen bg-background text-foreground dark:bg-primary dark:text-primary-foreground font-sans selection:bg-secondary selection:text-black flex flex-col ${isRequestPage ? 'overflow-x-hidden' : ''}`}>
      <Header />

      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/request" element={<RequestProposal />} />
        </Routes>
      </main>

      {!isRequestPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
