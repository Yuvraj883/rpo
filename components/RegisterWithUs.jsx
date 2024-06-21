const RegisterWithUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white py-6 text-red-700 md:flex-row md:gap-12 md:px-12">
        <img
          src='/register.jpg'
          className="h-80 w-auto rounded-md"
          alt='Register with us'
        />
        <section className="text-center md:text-left">
          <h1 className="font-bold text-3xl">Register With Us!!</h1>
          <p className="font-semibold text-lg mb-2">
            Struggling with your dream job search? We could help :) <br/>
          </p>
          <ul>
            <li>Click the button below and get started 🎉🎉</li>
          </ul>
          <button className="mt-8 bg-red-500 px-8 py-3 rounded-md text-white hover:font-semibold">Get Started</button>
        </section>
      </div>
    </>
  );
};

export default RegisterWithUs;
