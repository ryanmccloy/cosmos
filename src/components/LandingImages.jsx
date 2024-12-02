import Astronaut from "./Astronaut";
import LandingEarth from "./LandingEarth";
import LandingPlanet from "./LandingPlanet";
import LandingUfo from "./LandingUfo";

function LandingImages() {
  return (
    <>
      <div className="absolute -right-24 w-auto sm:-right-32">
        <Astronaut />
      </div>
      <div className="absolute -bottom-80 -left-28 hidden w-auto sm:block">
        <LandingPlanet />
      </div>

      <div className="absolute -bottom-12 -left-64 hidden w-auto bg-pink-200 md:block">
        <LandingUfo />
      </div>

      <div className="absolute right-0 top-0 hidden w-auto bg-purple-300 md:block">
        <LandingEarth />
      </div>
    </>
  );
}

export default LandingImages;

// ufo blob cut by container
// ufo not rotating
// images for md screen
