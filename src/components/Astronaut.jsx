import Blob from "./Blob";

function Astronaut() {
  return (
    <div className="relative min-h-[406px] max-w-[400px]">
      {/* Astronaut animation is in index.css */}
      <img
        className="animate-astronaut absolute left-4 top-10 z-10 h-[406px] w-[288px] -rotate-[20deg]"
        src="/assets/astronaut.svg"
        alt="An astronaut floating in space"
      />
      {/* Satellite animation is in index.css */}
      <img
        src="/assets/satellite.svg"
        className="absolute left-64 top-24 z-10 h-[80px] w-[72px]"
        alt="A satellite floating through space"
      />
      <Blob />
    </div>
  );
}

export default Astronaut;
