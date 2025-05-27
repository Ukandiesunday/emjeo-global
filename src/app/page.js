import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Service from "@/Components/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />

      {/* news letter */}
      <section className="bg-[#FFF2EB] px-[50px] py-[80px] flex flex-col justify-center items-center space-y-6">
        <h2 className="text-[#A93226] font-[Roboto] text-[30px] xl:text-[45px] uppercase font-black">
          newsletter
        </h2>
        <p className="text-[#676767] text-[24px] ">
          Get the latest news about our services and Culture! By subscribing to
          our daily newsletter
        </p>
        <div className=" flex justify-between items-center border-2 text-[24px] border-gray-300 rounded-[8px] bg-white h-[65px] w-full max-w-[700px]">
          <input
            className="border-0 px-5  w-full h-full focus:outline-none"
            type="text"
            placeholder="Enter email"
          />
          <button className="flex items-center bg-[#A93226] mr-1 h-[53px] rounded-[5px] p-4 text-white">
            Subscribe
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
