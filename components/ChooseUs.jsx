const ChooseUs = ()=>{
  return(
    <>
    <div className="bg-white">
      <h1 className="text-center text-4xl  bg-white font-bold py-8 text-red-700">Why Choose Us? </h1>
    <div className="md:grid md:grid-cols-3 flex-col gap-6 m-0 md:px-12 bg-white md:py-6">

      <section className="text-red-700 hover:scale-110 h-72 col-span-1 mt-2 mb-4 flex-col items-center justify-center shadow-lg md:px-6 py-2 ">
        <img src="/choose1.webp" className="m-auto" alt="Flexibility"/>
        <h1 className="text-center text-2xl font-bold">Flexibility</h1>
        <p className="text-center">Security recognition and new opportunities for the candidates.</p>
      </section>

      <section className="text-red-700 hover:scale-110 h-72 col-span-1 mt-2 flex-col items-center justify-center shadow-lg px-6 py-2 ">
        <img src="/choose3.webp" className="m-auto" alt="International Opportunities"/>
        <h1 className="text-center text-2xl font-bold">International Opportunities</h1>
        <p className="text-center">Opportunity to work with some of the worlds biggest brands.</p>
      </section>

      <section className="text-red-700 hover:scale-110 h-72 col-span-1 mt-2 flex-col items-center justify-center shadow-lg px-6 py-2 ">
        <img src="/choose2.webp" className="m-auto" alt="Career Development"/>
        <h1 className="text-center text-2xl font-bold">Career Development</h1>
        <p className="text-center">Expert career counseling and a personalised approach to develop skill and talent.</p>
      </section>

    </div>
    </div>

    </>
  )
}
export default ChooseUs;
