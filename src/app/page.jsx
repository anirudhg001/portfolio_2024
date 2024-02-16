import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER  */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Crafting Digital Experiences</h1>
        <p>
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and enthusiasm for code, my
          portfolio showcases the diversity in my projects that reflect my
          commitment to excellence.
        </p>
        <div className="flex gap-4">
          <button className="p-4 ring-1 ring-black rounded-lg bg-black text-white">
            View My Work
          </button>
          <button className="p-4 ring-1 ring-black rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
