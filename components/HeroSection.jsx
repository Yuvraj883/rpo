const HeroSection = () => {
  return (
    <>
      <div className=" relative h-screen bg-cover m-0">
        <img src='/hero2.jpg' className="absolute inset-0 h-[100%] w-screen object-cover z-0" alt="Hero section" />
        <div className="relative bg-transparent top-24 w-[80%] md:w-[50%] m-auto text-red-700">
          <h1 className=" text-4xl font-bold z-10 ">The best RPO in the world</h1>
          <p className="font-semibold p-2 mt-2 font-semibold text-lg">ABC Consultants is the pioneer of organised recruitment services in India hiring leaders for the leading organizations. Being one of the top recruitment firms, …  Source: ABC Consultants</p>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
