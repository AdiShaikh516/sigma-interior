import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProcessPage from "./pages/ProcessPage";
import AboutPage from "./pages/AboutPage";
import ConsultationPage from "./pages/ConsultationPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter page-enter-active">
      {children}
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </PageTransitionWrapper>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-canvas text-charcoal font-sans">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
