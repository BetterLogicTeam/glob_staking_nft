import React from 'react';
import './Bring.css'

function Bring() {
  return (
    <div>
        <section class="dark:bg-jacarta-800 relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="gradient_light.jpg" alt="gradient" class="h-full w-full"/>
        </picture>

        <div class="container">
          <div class="lg:flex lg:justify-between">
            
            <div class="py-20 lg:w-[45%] brng lg:pl-16">
              <h2 class="text-jacarta-700 font-display mb-6 text-2xl dark:text-white">
                We Bring together NFTs & Finance
              </h2>
              <p class="dark:text-jacarta-300 mb-8 text-lg leading-normal">
                Pay with Crypto currency in stories Worldwide.
                Our clients – both corporate and private ones –  </p>
              <p class="dark:text-jacarta-300 mb-10">
                will access all the services they need from a single platform. Blockchain technology gives us the chance to
                 make your finances grow faster and give better returns. 
              </p>
              <div class="flex brng_2 space-x-4 sm:space-x-10">
                <div class="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-accent h-8 w-8 shrink-0">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                  <div>
                    <h6><b>Virtual Card,</b></h6>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-accent h-8 w-8 shrink-0">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                  <div>
                    <h6><b>Price Analysis: Eve and Adam Could Be Turning</b></h6>
                   </div>
                </div>
              </div>
              <div class="flex brng_2 space-x-4 sm:space-x-10">
                <div class="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-accent h-8 w-8 shrink-0">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                  <div>
                    <h6><b> limited and Commisions</b></h6>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-accent h-8 w-8 shrink-0">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                  <div>
                    <h6><b>Virtual Card, limited and Commisions</b></h6>
                  </div>
                </div>
              </div>
            </div>
              
              <div class="lg:w-[55%]">
                <div class="relative">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto mt-8 w-[80%] rotate-[8deg]">
                    <defs>
                      <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                        <path d="
                      M 0, 100
                      C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                      S 200, 17.000000000000004 200, 100
                          183, 200 100, 200
                          0, 183 0, 100
                  " fill="#9446ED"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clipping)">
                      
                      <image href="story.jpg" width="200" height="200" clip-path="url(#clipping)"></image>
                    </g>
                  </svg>
                  <img src="3D_elements.png" alt="" class="animate-fly absolute top-0"/>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bring