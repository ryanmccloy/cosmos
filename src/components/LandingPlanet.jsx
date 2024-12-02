import Blob from "./Blob";

function LandingPlanet() {
  return (
    <div>
      <img
        src="/assets/planets/saturn.svg"
        alt="Saturn floating in space"
        className="animate-svg absolute -right-12 -top-6 z-10 w-56 md:w-72"
      />
      <Blob width="350px" height="220px" top="0px" left="0px" />
    </div>
  );
}

export default LandingPlanet;
