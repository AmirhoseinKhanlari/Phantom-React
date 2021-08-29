import "./Ethereum.css";
const Ethereum = () => {
  return (
    <div className=" mt-6 gap-5 max-w-xs flex flex-col justify-center mx-auto p-10 bg-[#4e44ce] rounded-3xl items-center sm:max-w-xl md:max-w-2xl md:flex-row lg:max-w-5xl">
      <figure class="grid flex-none w-[82px] h-[82px] md:w-[100px] md:h-[100px] rounded-full bg-[#453db0] place-content-center">
        <svg
          viewBox="0 0 35 56"
          fill="none"
          class="h-[55px] w-[34px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0351 0L16.6627 1.25878V37.7823L17.0351 38.1521L34.0726 28.1307L17.0351 0Z"
            fill="white"
          ></path>
          <path
            d="M17.0379 0L0 28.1307L17.0379 38.1521V20.4245V0Z"
            fill="white"
          ></path>
          <path
            d="M17.0353 41.3633L16.8254 41.618V54.6283L17.0353 55.238L34.0832 31.3472L17.0353 41.3633Z"
            fill="white"
          ></path>
          <path
            d="M17.038 55.238V41.3633L6.10352e-05 31.3472L17.038 55.238Z"
            fill="white"
          ></path>
          <path
            d="M17.0355 38.1514L34.0729 28.13L17.0355 20.4238V38.1514Z"
            fill="white"
          ></path>
          <path
            d="M6.10352e-05 28.13L17.038 38.1514V20.4238L6.10352e-05 28.13Z"
            fill="white"
          ></path>
        </svg>
      </figure>
      <div className="flex flex-col items-center gap-3 ml-5">
        <h3 className="text-white text-md md:text-2xl text-left">
          Join the Ethereum beta
        </h3>
        <p className="text-gray-400 text-center mx-auto md:text-left">
          Sign up to join the Ethereum beta waitlist
        </p>
      </div>
      <form className="relative mx-auto md:ml-auto w-full md:w-1/3 rounded-3xl p-4 bg-indigo-900 outline-none focus:border-2">
        <input
          className=" w-full focus:outline-none bg-transparent"
          placeholder="Email"
        ></input>
        <button className="absolute right-[0.5rem] top-[0.5rem] rounded-full grad">
          <figure class="grid w-10 h-10 place-content-center">
            <svg
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                fill="white"
              ></path>
            </svg>
          </figure>
        </button>
      </form>
    </div>
  );
};
export default Ethereum;
