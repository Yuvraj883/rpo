const RegisterWithUs = ()=>{
  return(
    <>
        <div className="md:flex flex-col md:px-12 gap-12 items-center justify-center bg-white py-6 text-red-700">
          <img src='/register.jpg'
          className="h-80 w-auto rounded-md"
          alt='Register with us'/>
          <section >
            <h1 className="font-bold text-3xl">Register With Us!!</h1>
            <p className="font-semibold text-lg mb-2">Struggling with your dream job search? We could help :{')'} <br/>

            </p>
            <ul>
              <li>Click the button below and get started 🎉🎉</li>
            </ul>
            <button className="text-white hover:font-semibold mt-8 bg-red-500 px-8 py-3 rounded-md">Get Started </button>
          </section>
        </div>
    </>
  )
}
export default RegisterWithUs;
