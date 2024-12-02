import NavBar from "../components/NavBar";
import CallToAction from "../components/CallToAction";
import LandingImages from "../components/LandingImages";

function LandingPage() {
  return (
    <div className="h-[100dvh] border-b-2">
      <NavBar />
      {/* Wrapper for positioning */}
      <div className="relative mx-auto w-fit bg-green-300">
        <CallToAction />
        <LandingImages />
      </div>
    </div>
  );
}

export default LandingPage;
