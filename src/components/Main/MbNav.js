import React from "react";

function MbNav() {
  return (
    <div className="bg-zinc-100 w-screen top-0 fixed z-50 shadow-xl block md:hidden ">
      <div className="grid grid-flow-col">
        <div className="px-5 ">
          <img
            className="xl:w-1/12 md:w-3/12 lg:w-2/12  w-7/12  mt-2 "
            src="https://athulyahomecare.com/lp/images/care.png"
            alt="logo"
          />
        </div>
        <div>
          <div className="mt-5   lg:mt-5 md:flex  text-sky-900 font-Poppins  font-semibold  space-x-5 mr-6">
            <a
              className="flex"
              href="tel:09884945900 "
              target="_blank"
              rel="noreferrer"
            >
              <span className=" text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              098849 45900
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbNav;
