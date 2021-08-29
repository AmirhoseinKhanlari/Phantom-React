const Intro = () => {
  return (
    <div className="container flex mx-auto mt-14 flex-col items-center px-2">
      <h1 className="text-gray-200 text-center text-4xl md:text-6xl font-bold tracking-wider">
        A crypto wallet you'll <span className="border-b-4 border-solid border-[#4e44ce]">love</span>
      </h1>
      <p className="text-center text-lg md:text-2xl text-gray-400 w-[80%] md:w-[45%] mx-auto mt-5 leading-8 font-light">
        Phantom makes it safe & easy for you to store, send, receive, stake, and
        swap tokens on the Solana blockchain
      </p>
      <a className=" font-bold flex justify-center items-center text-white bg-[#4e44ce] rounded-3xl mt-10 py-3 px-6">Add to Chrome</a>
    </div>
  );
};
export default Intro;
