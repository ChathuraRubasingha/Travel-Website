"use client";
import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const heroImages = [
    "LionRock.JPG",
    "ella2.JPG",
    "coco.JPG",
    "LionRock.JPG",
    "ella2.JPG",
    "coco.JPG",
  ];
  const [heroCount, setHeroCount] = useState(0);

  return (
    <div
      className="w-full h-screen bg-cover transition-opacity"
      style={{ backgroundImage: `url(${heroImages[heroCount]})` }}
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
        <div className="flex flex-col justify-end">
          <div className="hero">
            <div className="items-end ml-50">
              <h1 className="text-[200px] text-[#ffffff1e] font-semibold overflow-x-hidden p-0 m-0">
                MIRISSA
              </h1>
            </div>
            <div className="hero-card-holder flex gap-4 overflow-x-hidden scrollbar-hide">
              {heroImages.map((items, index) => (
                <div
                  key={items}
                  className="hero-card w-[200px] h-[280px] rounded-2xl bg-gray-200 bg-cover flex-shrink-0 flex items-end"
                  style={{ backgroundImage: `url(${heroImages[index]})` }}
                >
                  <div className="px-4 pb-4">
                    <h1 className="text-2xl text-white font-bold">MIRRISSA</h1>
                    <p className="text-xs text-white">
                      Sri Lanka, officially the Democratic Socialist Republic
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mb-4 mt-5">
            <button
              className="p-2 rounded-3xl border-[#ffffffc2] border cursor-pointer"
              style={
                heroCount === heroImages.length - 1
                  ? { border: "2px solid gray" }
                  : {}
              }
              onClick={() =>
                setHeroCount(
                  heroCount < heroImages.length - 1 ? heroCount + 1 : heroCount
                )
              }
            >
              <ChevronLeft size={20} color="white" />
            </button>
            <button
              style={heroCount === 0 ? { border: "2px solid gray" } : {}}
              className="p-2 rounded-3xl border-[#ffffffc2] border cursor-pointer "
              onClick={() =>
                setHeroCount(heroCount > 0 ? heroCount - 1 : heroCount)
              }
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
