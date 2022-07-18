import React from 'react';
import './Carde.css'

function Carde() {
  return (
    <div>
        <section class="relative pt-32 pb-24">
  <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
    <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
  </picture>
  <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
    <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
  </picture>
  <div class="container">
    <div class="mx-auto crade max-w-xl text-center">
      <h1 class="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
        Why you Choose GlobStake
      </h1>
      <p class="dark:text-jacarta-200 mb-16 text-lg leading-normal">
        GlobStake is a system where people can take a new step towards making their dreams come true.
      </p>
    </div>

    <div class="grid gap-7 md:grid-cols-3">
      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-[2.25rem] w-[2.25rem] fill-white">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"></path>
            </svg>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
          Lowest Cost
        </h3>
        <p>We had offered our first token with little price, it's cost-effective affordable for all.</p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-[2.25rem] w-[2.25rem] fill-white">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"></path>
            </svg>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
          Safe Contracts
        </h3>
     <p>Introducing our GlobStake Tron(Tron Scan). The tron network and the algorithm it operates on are indeed very safe. It is safe secure and fast.</p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-[2.25rem] w-[2.25rem] fill-white">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0zm1-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            </svg>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
          Fast Blockchain
        </h3>
        <p>High transaction speed which delivery fast transactions. It can perform multiple transactions at a time.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Carde