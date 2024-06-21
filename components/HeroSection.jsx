const HeroSection = () => {
  return (
    <>
      <div className=" relative h-screen bg-cover m-0">
        <img src='/hero2.jpg' className="absolute inset-0 h-[100%] w-screen object-cover z-0" alt="Hero section" />
        <div className="relative bg-transparent top-48 w-[80%] md:w-[50%] m-auto text-red-700">
          <h1 className=" text-4xl font-bold z-10 ">The best RPO in the world</h1>
          <p className="font-semibold p-2 mt-2 text-lg">ABC Consultants is the pioneer of organised recruitment services in India hiring leaders for the leading organizations. Being one of the top recruitment firms, …  Source: ABC Consultants</p>
          <button className="mt-8 bg-red-500 px-8 py-3 rounded-md text-white hover:font-semibold">Get Started</button>

        </div>
      </div>
    </>
  );
}
export default HeroSection;
