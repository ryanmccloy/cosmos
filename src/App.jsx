import LandingPage from "./sections/LandingPage";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="overflow-hidden bg-secondary p-7 font-sans text-sm leading-relaxed tracking-wide text-primary">
      <LandingPage />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
