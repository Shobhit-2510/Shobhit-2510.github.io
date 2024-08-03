import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/pages/Homepage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ResumePage from "./components/pages/ResumePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        {/**To scroll to top on changing route */}
        <ScrollToTop />
        <Navbar />
        <div className="Content text-center text-4xl py-3 h-[100vh] text-black">
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/Projects" Component={ProjectsPage} />
            <Route path="/Resume" Component={ResumePage} />
            <Route path="/About" Component={AboutPage} />
            <Route path="/Contact" Component={ContactPage} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
