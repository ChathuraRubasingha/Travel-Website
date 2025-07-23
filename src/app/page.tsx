import HeaderBar from "./components/HeaderBar";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover"
      style={{ backgroundImage: "url('/ella2.jpg')" }}
    >
      <HeaderBar />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-screen flex items-center ">
          <div className="pl-12 pr-4">
            <h1 className="font-bold text-7xl text-white">
              WELCOME <br />
              TO SRI LANKA
            </h1>
            <p className="text-[#ffffffc2] text-lg mt-2">
              Sri Lanka, officially the Democratic Socialist Republic of Sri
              Lanka, also known historically as Ceylon, is an island country in
              South Asia. It lies in the Indian Ocean, southwest of the Bay of
              Bengal, separated from the Indian peninsula by the Gulf of Mannar
              and the Palk Strait.
            </p>
            <button className="px-10 py-2 rounded-3xl bg-[#ffffff40] font-semibold text-white mt-5 cursor-pointer">
              Explore
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
