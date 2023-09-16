import Phone1 from "../assets/Phone1.png";
import Phone2 from "../assets/Phone2.png";
import Phone3 from "../assets/Phone3.png";
const AboutApp = () => {
  return (
    <div className="w-full h-full text-center flex-col justify-center mt-40 sm:mt-60">
      <h3 className=" text-xl font-bold sm:text-3xl">How the app works</h3>
      <div className=" mt-8 flex-col gap-3 flex-wrap px-6  align-middel sm:flex sm:flex-row-reverse sm:align-middle sm:justify-around ">
        <div className="sm:flex-col sm:justify-start  sm:h-full sm:mt-40">
          <p className="text-xl text-orange sm:text-2xl flex-wrap sm:">
            Create an account
          </p>
          <h1 className="text-3xl pt-8 font-bold sm:flex sm:justify-center">
            Create/login to an existing account to get started
          </h1>
          <p className="px-8 py-6 text-grey text-lg sm:text-2xl">
            An account is created with your email and a desired password
          </p>
        </div>
        <div>
          <img className="h-[80%] ml-3 sm:mt-8" src={Phone1} alt="" />
        </div>
      </div>
      <div className=" mt-8 flex-col gap-3 flex-wrap px-6  align-middel sm:flex sm:flex-row sm:align-middle sm:justify-around ">
        <div className="sm:flex-col sm:justify-start  sm:h-full sm:mt-40">
          <p className="text-xl text-orange sm:text-2xl flex-wrap">
            Explore while shopping
          </p>
          <h1 className="text-3xl pt-8 font-bold sm:flex sm:justify-center">
            Shop for your favorites meal as e dey hot.
          </h1>
          <p className="px-8 py-6 text-grey text-lg sm:text-2xl">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>
        <div>
          <img className="h-[80%] ml-3 sm:mt-8" src={Phone2} alt="" />
        </div>
      </div>
      <div className=" mt-8 flex-col gap-3 flex-wrap px-6  align-middel sm:flex sm:flex-row-reverse sm:align-middle sm:justify-around ">
        <div className="sm:flex-col sm:justify-start sm:h-full sm:mt-40">
          <p className="text-xl text-orange sm:text-2xl flex-wrap ">
            Checkout
          </p>
          <h1 className="text-3xl pt-8 font-bold sm:flex sm:justify-center">
            When you done check out and get it delivered.
          </h1>
          <p className="px-8 py-6 text-grey text-lg sm:text-2xl">
            When you done check out and get it delivered with ease.
          </p>
        </div>
        <div>
          <img className="h-[80%]  ml-3 sm:mt-8" src={Phone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
