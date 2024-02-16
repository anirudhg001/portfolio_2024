import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER  */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        <p>
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and enthusiasm for code, my
          portfolio showcases the diversity in my projects that reflect my
          commitment to excellence.
        </p>
        <div className="flex gap-4">
          <button>View My Work</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
