import Image from "next/image";
import Link from "next/link";
import React from "react";
const menuNavbars = [
  {
    title: "contact us",
    link: `/support/contact-us`,
  },
  // {
  //   title: "subscription",
  //   link: "/subscription",
  // },
];
function HomepageNavbar() {
  return (
    <nav className="w-full bg-white z-50 gap-2  sticky top-0 p-1 md:p-3 h-20 font-Anuphan flex items-center justify-between">
      <Link
        href="/"
        className="flex items-center justify-center gap-1 md:gap-5"
      >
        <div className="w-10 h-10 relative hover:scale-105 active:scale-110 transition duration-150">
          <Image
            src="/icon.svg"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="logo tatuga school"
          />
        </div>
        <div className="font-semibold hidden md:block text-xs md:text-base text-primary-color">
          Tatuga School
        </div>
      </Link>
      <section className="w-full overflow-auto h-max py-2 md:overflow-visible md:w-max">
        <div className="w-max flex items-center justify-center gap-2  md:gap-10 lg:gap-20">
          <div className="flex items-center gap-5">
            {menuNavbars.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className="text-black w-max lg:w-32 hover:text-primary-color transition duration-100 hover:font-semibold"
              >
                {menu.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 font-semibold">
            <a
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-up`}
              className="w-28 h-10 hover:scale-110 transition duration-100 ring-primary-color ring-1 text-primary-color flex items-center justify-center rounded-md"
            >
              No Account?
            </a>
            <a
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}`}
              className="w-20 h-10 text-white 0 hover:scale-110 transition duration-100 bg-primary-color flex items-center justify-center rounded-md"
            >
              Let's Go
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default HomepageNavbar;
