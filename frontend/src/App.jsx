import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import ScrollToTop from "./components/ScrollToTop";
import DonationSuccess from "./pages/DonationSuccess";



// Add this route
<Route path="/donation-success" element={<DonationSuccess />} />

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import OurStory from "./pages/OurStory";
import OurApproach from "./pages/OurApproach";
import OurImpact from "./pages/OurImpact";

// Campaign Pages
import GirlEducation from "./pages/Campaigns/GirlEducation";
import WomenEmpowerment from "./pages/Campaigns/WomenEmpowerment";
import Healthcare from "./pages/Campaigns/Healthcare";
import Livelihood from "./pages/Campaigns/Livelihood";

// Get Involved Pages
import Volunteer from "./pages/GetInvolved/Volunteer";
import Partners from "./pages/GetInvolved/Partners";
import Careers from "./pages/GetInvolved/Careers";

// Resources Pages
import Blog from "./pages/Resources/Blog";
import Research from "./pages/Resources/Research";
import Reports from "./pages/Resources/Reports";
import Gallery from "./pages/Resources/Gallery";

// Media Pages
import PressReleases from "./pages/Media/PressReleases";
import Events from "./pages/Media/Events";
import Coverage from "./pages/Media/Coverage";

// Other Pages
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <main className="pt-[140px] md:pt-[120px]">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          
          {/* Who We Are */}
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/our-impact" element={<OurImpact />} />

          {/* What We Do - Campaigns */}
          <Route path="/campaigns/girl-education" element={<GirlEducation />} />
          <Route path="/campaigns/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/campaigns/healthcare" element={<Healthcare />} />
          <Route path="/campaigns/livelihood" element={<Livelihood />} />

          {/* Get Involved */}
          <Route path="/get-involved" element={<Volunteer />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partners" element={<Partners />} />
          <Route path="/get-involved/careers" element={<Careers />} />

          {/* Resources */}
          <Route path="/resources" element={<Blog />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/research" element={<Research />} />
          <Route path="/resources/reports" element={<Reports />} />
          <Route path="/resources/gallery" element={<Gallery />} />

          {/* Media Center */}
          <Route path="/media" element={<PressReleases />} />
          <Route path="/media/press-releases" element={<PressReleases />} />
          <Route path="/media/events" element={<Events />} />
          <Route path="/media/coverage" element={<Coverage />} />

          {/* Other */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />

          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
                <a href="/" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;