import React from 'react';
import './About.css'

function About() {
  return (
    <div>
        <section class="bg-accent" style={{marginTop:"50px"}}>
        <section class="relative pt-12 pb-24 lg:py-24">
           <div class="container">
           
            <div class="md:flex md:flex-wrap">
              
              <figure class="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                <img src="12.gif" alt="item" class="rounded-2.5xl cursor-pointer" data-bs-toggle="modal" data-bs-target="#imageModal"/>
  
                
                <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
                  <div class="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                    <img src="12.gif" alt="item"/>
                  </div>
  
                  <button type="button" class="btn-close absolute top-6 right-6" data-bs-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 fill-white">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                    </svg>
                  </button>
                </div>
                
              </figure>
               
              <div class="md:w-3/5 para md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                
                <h1 class="font-display text-jacarta-700 mb-4 text-4xl font-semibold" style={{color:"#fff"}}>About GlobStake</h1>
                <p className='text' style={{color:"#fff"}}>
                  GlobStake is a system where landing on crypto currency, forex trading with DeFi staking is done by a well experienced 
                  team and its profit is shared to the investor. GlobStake system utilizes Artificial intelligence to deliver a
                   consistent daily profit to our clients. GlobStake traders have more than 10 years of experience in one of the 
                   biggest markets in the world, Forex trading which is a market with a daily trading volume that exceeds 6 
                   Trillion USD.
                </p> 
                 
              </div>
              
              
            </div>
         </div>
        </section>
      </section>
    </div>
  )
}

export default About