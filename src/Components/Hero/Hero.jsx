import React from "react";
import './Hero.css'

function Hero() {
  return (
    <div>
      <section className="relative hero_main pb-10 pt-20 md:pt-32 lg:h-[88vh]">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="gradient_dark.jpg" alt="gradient dark" />
        </picture>

        <div className="container h-full">
          <div className="grid h-full items-center gap-4 md:grid-cols-12">
            <div className="col-span-6 hero flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
              <h1 className="text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                BEST NFT Marketplace
              </h1>
              <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
                Globnft is a marketing company that works to increase the holder
                and usefulness of all types of cryptocurrencies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="create.html"
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold
                   text-white transition-all"
                >
                  Upload
                </a>
                <a
                  href="collections.html"
                  className="text-accent explr shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
                >
                  Explore
                </a>
              </div>
            </div>

            <div class="col-span-6 xl:col-span-8 hero_div">
              <div class="relative text-center md:pl-8 md:text-right">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-8 hero inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                >
                  <defs className="hero">
                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                      <path
                        d="
                                                M 0, 100
                                                C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                                                S 200, 17.000000000000004 200, 100
                                                183, 200 100, 200
                                                0, 183 0, 100
                                                "
                        fill="#9446ED"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipping)">
                    <image
                      href="2.gif"
                      className="gift"
                      width="200"
                      height="200"
                      clip-path="url(#clipping)"
                    ></image>
                  </g>
                </svg>
                <img
                  src="3D_elements.png"
                  alt=""
                  class="animate-fly emg hero2 absolute top-0 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
