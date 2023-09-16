import left from "../assets/left1.png";
import right from "../assets/right1.png";
const Home = () => {
  return (
    <div className="mt-4 w-full h-screen">
      <div className="w-full h-full flex justify-center mt-[10%] border-red-600 sm:mt-[0] sm:bg-homeimg sm:bg-no-repeat relative xl:bg-cover">
        <div className="h-full flex-col p-8 sm:mt-[10%]">
          <div className="text-black text-center gap sm:text-white">
            <div className="w-full h-full md:hidden"></div>
            <h4 className="text-grey sm:text-white">Food App</h4>
            <div className="font-bold text-2xl flex flex-wrap  justify-center sm:text-3xl">
              Why stay hungry when you <br />
              can order from Bella Onojie
            </div>
            <div className="text-grey flex flex-wrap text-2xl sm:text-2xl sm:text-white">
              Download the bella onojie's food app now on
            </div>
          </div>
          <div className="flex-col gap:4 text-center p-2 sm:text-center ">
            <button className=" w-[150px] h-15 rounded-full mb-4 bg-orange text-white p-2 sm:p-1 sm:inline sm:w-[100px]">
              Playstore
            </button>
            <button className="text-orange w-[150px] border-[1px] border-orange h-15 rounded-full p-2 sm:p-1 sm:inline sm:w-[100px] sm:text-white sm:border-white">
              Appstore
            </button>
          </div>
        </div>
        <img
          className="animate-moveside1 left-[-9%] bottom-[-40px] w-[350px] h-[550px] absolute sm:bottom-[0px] sm:left-[10%] md:left-[25%] sm:animate-none sm:hover:animate-moveside1 md:bottom-[60px] xl:bottom-[-40%] xl:left-[30%]"
          src={left}
          alt="phone image"
        />
        <img
          className="animate-moveside2 bottom-[-60px] right-[6%] w-[200px] h-[380px] absolute sm:bottom-[0px] sm:right-[25%] sm:animate-none sm:hover:animate-moveside2 md:bottom-[50px] md:left-[50%] xl:bottom-[-35%]  xl:right-[35%]"
          src={right}
          alt="Phone image"
        />
      </div>
    </div>
  );
};

export default Home;
