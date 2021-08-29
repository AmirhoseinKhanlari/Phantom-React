const Footer = () => {
  return (
    <section className="bg-[#222222] text-white px-5 py-8 flex flex-col md:flex-row md:items-center lg:justify-center">
      <div className="mr-auto lg:mr-20">
        <p className="text-3xl font-bold">Phantom</p>
        <p className="mt-5 ">© Phantom Technologies, Inc.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 md:gap-20">
        <div className="flex flex-col gap-y-2">
          <h4 className="">Product</h4>
          <ul className="list-none text-gray-500 flex flex-col gap-y-2">
            <li>Overview</li>
            <li>Download</li>
            <li>Security</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="">Product</h4>
          <ul className="list-none text-gray-500 flex flex-col gap-y-2">
            <li>Overview</li>
            <li>Download</li>
            <li>Security</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="">Product</h4>
          <ul className="list-none text-gray-500 flex flex-col gap-y-2">
            <li>Overview</li>
            <li>Download</li>
            <li>Security</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="">Product</h4>
          <ul className="list-none text-gray-500 flex flex-col gap-y-2">
            <li>Overview</li>
            <li>Download</li>
            <li>Security</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
