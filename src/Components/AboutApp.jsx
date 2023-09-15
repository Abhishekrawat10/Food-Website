import Phone1 from "../assets/Phone1.png";
const AboutApp = () => {
  return (
    <div className="w-full h-screen text-center flex-col justify-center mt-40 border-2 sm:mt-60">
      <h3 className=" text-xl font-bold sm:text-3xl">How the app works</h3>
      <div className=" mt-8 flex-col gap-3 flex-wrap px-6 sm:flex sm:flex-row-reverse">
        <div className="sm:flex-col sm:justify-start sm:border-2 sm:h-full sm:mt-40">
          <p className="text-xl text-orange sm:text-2xl flex-wrap sm:border-2 sm:">
            Create an account
          </p>
          <h1 className="text-3xl pt-8 font-bold sm:border-2 sm:flex sm:justify-center">
            Create/login to an existing account to get started
          </h1>
          <p className="px-8 py-6 text-grey text-lg sm:text-2xl">
            An account is created with your email and a desired password
          </p>
        </div>
        <div>
          <img className="h-[60%] border-2" src={Phone1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
