import Image from "next/image";
import Link from "next/link";
import React from "react";
const menuNavbars = [
  {
    title: "about us",
    link: "/about-us",
  },
  {
    title: "subscription",
    link: "/subscription",
  },
];
function HomepageNavbar() {
  return (
    <nav className="w-full bg-white z-50  sticky top-0 p-3 h-20 font-Anuphan flex justify-between">
      <section className="flex items-center justify-center gap-5">
        <Link
          href="/"
          className="w-10 h-10 relative hover:scale-105 active:scale-110 transition duration-150"
        >
          <Image src="/icon.svg" fill alt="logo tatuga school" />
        </Link>
        <div className="font-semibold text-primary-color">Tatuga School</div>
      </section>
      <section className="flex  items-center justify-center gap-20">
        <div className="flex items-center gap-5">
          {menuNavbars.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="text-black w-32 hover:text-primary-color transition duration-100 hover:font-semibold"
            >
              {menu.title}
            </Link>
          ))}
        </div>

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
