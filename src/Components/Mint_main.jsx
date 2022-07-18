import React from 'react'

function Mint_main() {
  return (
    <div>
        <section class="relative lg:py-24" style={{paddingTop: "130px !important"}}>
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="gradient_light.jpg" alt="gradient" class="h-full"/>
        </picture>
        <div class="container">
          {/* <!-- Item --> */}
          <div class="md:flex md:flex-wrap">
            {/* <!-- Image --> */}
            <figure class="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
              <img src="products/8.gif" alt="item" class="rounded-2.5xl cursor-pointer" data-bs-toggle="modal" data-bs-target="#imageModal"/>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
                <div class="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                  <img src="products/8.gif" alt="item"/>
                </div>

                <button type="button" class="btn-close absolute top-6 right-6" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                  </svg>
                </button>
              </div>
              {/* <!-- end modal --> */}
            </figure>

            {/* <!-- Details --> */}
            <div class="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                <h1 class="font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white">MINT</h1>

              <div class="mb-8 flex items-center space-x-4 whitespace-nowrap">
                <div class=""><input class="count-form" type="text" id="qtyBox" value="1"/></div>
              </div>
                {/* <!-- Creator / Owner --> */}
              <div class="mb-8 flex flex-wrap">
                <div class="mr-8 mb-4 flex">
                  <figure class="mr-4 shrink-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" 
                    class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Mint With LSCN</a>
                  </figure>
                  <div class="flex flex-col justify-center">
                     <a href="user.html" class="text-accent block">
                      <span class="text-sm font-bold"><h1 style={{fontSize:"28px"}}>Price : 0 LSCN</h1></span>
                    </a>
                  </div>
                </div>
                
              </div>

               
            </div>
            {/* <!-- end details --> */}
          </div>
 
        </div>
      </section>
    </div>
  )
}

export default Mint_main