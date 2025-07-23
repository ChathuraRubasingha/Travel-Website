"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBar from "./components/HeaderBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const herolist = [
    { name: "SIGIRIYA", heroImage: "LionRock.JPG" },
    { name: "ELLA", heroImage: "ella2.JPG" },
    { name: "MIRISSA", heroImage: "coco.JPG" },
    { name: "SIGIRIYA", heroImage: "LionRock.JPG" },
    { name: "ELLA", heroImage: "ella2.JPG" },
    { name: "MIRISSA", heroImage: "coco.JPG" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState(0);

  // Image preloading to avoid flash
  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    if (herolist[heroCount + 1]) preload(herolist[heroCount + 1].heroImage);
    if (herolist[heroCount - 1]) preload(herolist[heroCount - 1].heroImage);
  }, [heroCount]);

  const updateHero = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < herolist.length) {
      setPrevHeroIndex(heroCount);
      setHeroCount(newIndex);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Crossfade background images */}
        <div className="absolute inset-0">
          {/* Previous image fading out */}
          <motion.div
            key={`prev-${herolist[prevHeroIndex].heroImage}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${herolist[prevHeroIndex].heroImage})`,
            }}
          />

          {/* Current image fading in */}
          <motion.div
            key={`new-${herolist[heroCount].heroImage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${herolist[heroCount].heroImage})`,
            }}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 w-full h-full">
          <HeaderBar />

          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left panel */}
            <div className="flex items-center">
              <div className="pl-12 pr-4">
                <h1 className="font-bold text-7xl text-white">
                  WELCOME <br />
                  TO SRI LANKA
                </h1>
                <p className="text-[#ffffffc2] text-lg mt-2">
                  Sri Lanka, officially the Democratic Socialist Republic of Sri
                  Lanka, also known historically as Ceylon, is an island country
                  in South Asia. It lies in the Indian Ocean, southwest of the
                  Bay of Bengal, separated from the Indian peninsula by the Gulf
                  of Mannar and the Palk Strait.
                </p>
                <button className="px-10 py-2 rounded-3xl bg-[#ffffff40] font-semibold text-white mt-5 cursor-pointer">
                  Explore
                </button>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col justify-end h-full">
              <div className="hero">
                {/* Location title with animation */}
                <div className="items-end ml-12 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={herolist[heroCount].name + heroCount}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="text-[200px] text-[#ffffff1e] font-semibold leading-none tracking-tight p-0 m-0"
                    >
                      {herolist[heroCount].name}
                    </motion.h1>
                  </AnimatePresence>
                </div>

                {/* Scrollable hero card list */}
                <div className="hero-card-holder flex gap-4 overflow-x-hide scrollbar-hide px-12 pb-4">
                  {herolist.map((item, index) => (
                    <div
                      key={index}
                      className="hero-card w-[200px] h-[280px] rounded-2xl bg-gray-200 bg-cover bg-center flex-shrink-0 flex items-end"
                      style={{ backgroundImage: `url(${item.heroImage})` }}
                    >
                      <div className="px-4 pb-4 bg-gradient-to-t from-black/50 to-transparent w-full rounded-b-2xl">
                        <h1 className="text-2xl text-white font-bold">
                          {item.name}
                        </h1>
                        <p className="text-xs text-white">
                          Sri Lanka, officially the Democratic Socialist
                          Republic
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-4 mb-6 mt-5 px-12">
                <button
                  className="p-2 rounded-3xl border cursor-pointer border-[#ffffffc2]"
                  style={
                    heroCount === 0 ? { border: "2px solid gray" } : undefined
                  }
                  onClick={() => updateHero(heroCount - 1)}
                >
                  <ChevronLeft size={20} color="white" />
                </button>
                <button
                  className="p-2 rounded-3xl border cursor-pointer border-[#ffffffc2]"
                  style={
                    heroCount === herolist.length - 1
                      ? { border: "2px solid gray" }
                      : undefined
                  }
                  onClick={() => updateHero(heroCount + 1)}
                >
                  <ChevronRight size={20} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-red-100 grid grid-cols-2">
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}
