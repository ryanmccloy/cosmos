import Blob from "./Blob";

function Astronaut() {
  return (
    <div className="relative h-[406px] w-[406px]">
      {/* Astronaut animation is in index.css */}
      <img
        className="animate-astronaut absolute left-4 top-10 z-10 w-72 -rotate-[20deg] md:-left-8 md:w-96"
        src="/assets/astronaut.svg"
        alt="An astronaut floating in space"
      />
      {/* Satellite animation is in index.css */}
      <img
        src="/assets/satellite.svg"
        className="animate-svg absolute left-64 top-24 z-10 w-20 md:left-72 md:w-24"
        alt="A satellite floating through space"
      />
      <Blob />
    </div>
  );
}

export default Astronaut;
