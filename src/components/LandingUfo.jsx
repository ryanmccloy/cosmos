import Blob from "./Blob";

function LandingUfo() {
  return (
    <div className="relative overflow-visible">
      <img
        src="/assets/ufo.svg"
        alt="ufo flaoting through space"
        className="animate-svg absolute -right-16 top-20 z-10 w-60 rotate-45 transform"
      />
      <Blob width="245px" height="380px" top="0px" left="0px" />
    </div>
  );
}

export default LandingUfo;
