import AnimatedButton from "./AnimatedButton";

function CallToAction() {
  return (
    <div className="mt-24 flex flex-col items-center gap-9 text-center">
      <div className="deep-shadow font-heading text-6xl text-white transition-all duration-500 sm:text-7xl md:text-8xl">
        <h1 className="lg:hidden">
          Websites that <br /> are out of <br /> this world
        </h1>
        <h1 className="hidden bg-green-300 lg:block">
          Websites that are <br /> out of this world
        </h1>
      </div>

      <p className="mt-[10px] w-60 sm:w-[70%]">
        Innovative, fast, and accessible websites designed to take your business
        to the stars.
      </p>
      {/*button styles are applied in index.css*/}
      <AnimatedButton />
    </div>
  );
}

export default CallToAction;
