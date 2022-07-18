import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer class="dark:bg-jacarta-900 footer_main page-footer bg-white">
      <div class="container">
        <div class="row pt-10 pb-6">
          <div class="col-lg-3 footer_main md:col-4">
            
            <a href="index.html" class="mb-6 footer_lik inline-block">
              <img src="logo.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
              <img src="logo_white.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
            </a>
            <p class="dark:text-jacarta-300 footer_p mb-12">
              Create, sell and collect truly rare digital  artworks. Powered by blockchain technology.
            </p>
            
            <div class="flex main_icon space-x-5">
              <a href="https://www.facebook.com/globstakeofficial" target="_blank" class="group">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook"
                  class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                  role="img"
                  xmlns="https://www.facebook.com/globstakeofficial"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  ></path>
                </svg>
              </a>
              <a href="https://twitter.com/globstake"  target="_blank" class="group">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                  role="img"
                  xmlns="https://twitter.com/globstake"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
               
              <a href="https://www.instagram.com/accounts/login/?next=/globstake_official/" target="_blank" class="group">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=/globstake_official/" target="_blank" class="group">
                <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="white"></path> </svg>
              </a>
            
            </div>
          </div>
            <div class="col-lg-3 footer_list sm:col-3 md:col-2 md:col-7">
            {/* <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">Home</h3> */}
            <ul class="dark:text-jacarta-300 flex flex-col space-y-1">
              <li>
                <a href="#" class="hover:text-accent dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" class="hover:text-accent dark:hover:text-white">collection</a>
              </li>
              <li>
                <a href="#" class="hover:text-accent dark:hover:text-white">Mint</a>
              </li>
             </ul>
          </div>

           <div class="col-span-full sm:col-span-3 md:col-span-2">
            {/* <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">collection</h3> */}
           </div>
           <div class="col-span-full sm:col-span-3 md:col-span-2">
            {/* <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">Mint</h3> */}
           </div> 
        </div>
        <div class="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          <span class="dark:text-jacarta-400 text-sm"
            >&copy;
            <script>
              document.write(new Date().getFullYear())
            </script>
           
            <a href="https://www.globstake.io/" class="hover:text-accent">www.globnft.com</a></span
          >
          <ul class="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
            <li>
              <a href="#" class="hover:text-accent">Terms and conditions</a>
            </li>
            <li><a href="#" class="hover:text-accent">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer