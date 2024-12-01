import AnimatedButton from "./AnimatedButton";

function CallToAction() {
  return (
    <div className="mt-24 flex flex-col items-center gap-9 text-center">
      <h1 className="deep-shadow font-heading text-6xl text-white">
        Websites that <br></br> are out of <br></br> this world
      </h1>

      <p className="mt-[10px] w-60">
        Innovative, fast, and accessible websites designed to take your business
        to the stars.
      </p>
      {/*button styles are applied in index.css*/}
      <AnimatedButton />
    </div>
  );
}

export default CallToAction;
