import Image from "next/image";
import React from "react";

function HomepageNavbar() {
  return (
    <nav className="w-full p-3 h-20 font-Anuphan flex justify-between">
      <section className="flex items-center justify-center gap-5">
        <div className="w-10 h-10 relative">
          <Image src="/icon.svg" fill alt="logo tatuga school" />
        </div>
        <div className="font-semibold text-primary-color">Tatuga School</div>
      </section>
      <section className="flex  items-center justify-center gap-20">
        <div>about us</div>
        <div>subscription</div>

        <div className="flex items-center justify-center gap-5 font-semibold">
          <button className="w-28 h-10 hover:scale-110 transition duration-100 ring-primary-color ring-1 text-primary-color flex items-center justify-center rounded-md">
            No Account?
          </button>
          <button className="w-20 h-10 text-white 0 hover:scale-110 transition duration-100 bg-primary-color flex items-center justify-center rounded-md">
            Login
          </button>
        </div>
      </section>
    </nav>
  );
}

export default HomepageNavbar;
