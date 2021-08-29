import image from "../../assets/img/Chrome.png";
const ChromeIntro = () => {
  return (
    <div className="px-5 py-5 mx-auto w-[90%] my-5 rounded-3xl bg-[#4e44ce] flex justify-center flex-col items-center md:overflow-hidden lg:flex-row lg:container lg:gap-8">
      <h2 className="text-center text-gray-100 text-2xl font-bold w-[50%] leading-10 md:order-2 md:self-start md:text-6xl md:w-[70%] md:mt-9 md:leading-tight md:text-left lg:hidden ">
        Turn your browser
        <br /> into a crypto wallet
      </h2>
      <img
        className="mt-10 mr-10 md:mr-96 rounded-xl md:rounded-md md:order-1  lg:h-[50rem] lg:w-2/3 lg:mr-8"
        src={image}
      ></img>
       <div className="md:order-2">
           <h2 className="hidden lg:flex text-center text-gray-100 text-6xl font-bold w-[100%] leading-snug">Turn your browser
        <br /> into a crypto wallet</h2>
      <p className="text-gray-400 mt-10 md:order-3 md:w-[60%] md:text-2xl md:self-start lg:text-left">
        Phantom unlocks a simple and secure way to interact with
        blockchain-based applications directly from your favorite web browser.
      </p>
      <ul className="hidden mt-5 gap-5 text-white text-2xl md:flex md:list-none md:order-4 md:self-start md:flex-col md:w-60">
        <li className="border-b-2 inline-block">Send & Recieve</li>
        <li>Collect NFTs</li>
        <li>Swap Tokens</li>
      </ul>
      </div>
    </div>
  );
};
export default ChromeIntro;
