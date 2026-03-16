import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetUser } from "../../react-query/user";
import LanguageSelect from "../common/LanguageSelect";
const menuNavbars = [
  {
    title: "contact us",
    link: `/support/contact-us`,
  },
  {
    title: "document",
    link: "https://document-tatugaschool.my.canva.site",
  },
  {
    title: "pricing",
    link: "/price",
  },
];
function HomepageNavbar() {
  const user = useGetUser();
  return (
    <nav className="w-full border-b-2 border-black bg-white z-50 gap-2  sticky top-0 p-1 md:p-3 h-20 font-Anuphan flex items-center justify-between">
      <Link
        href={"/"}
        className="flex items-center justify-center gap-1 md:gap-3"
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-2xl ring-1 ring-white transition duration-150 hover:scale-105 active:scale-110">
          <Image
            src="/favicon.ico"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="logo tatuga school"
          />
        </div>
        <div className="hidden lg:w-40 text-xs font-bold uppercase text-icon-color md:block md:text-sm">
          Tatuga School
        </div>
      </Link>
      <section className="grow flex gap-5 overflow-auto h-max py-2 lg:justify-end ">
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
        <LanguageSelect />
        <div className="flex items-center justify-center gap-5 font-semibold">
          <a
            href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-up`}
            className="w-28 h-10 hover:scale-110 transition duration-100 ring-primary-color ring-1 text-primary-color flex items-center justify-center rounded-2xl"
          >
            No Account?
          </a>
          <a
            href={
              user.data && user.data.favoritSchool
                ? `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/school/${user.data.favoritSchool}`
                : `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}`
            }
            className="w-max px-2 h-10 gap-2
               text-white transition duration-100 bg-primary-color flex items-center justify-center rounded-2xl"
          >
            {user.data && (
              <div className="w-8 h-8 relative rounded-full overflow-hidden bg-white">
                <Image
                  src={user.data.photo}
                  placeholder={user.data.blurHash ? "blur" : "empty"}
                  blurDataURL={user.data.blurHash}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="profile picture"
                />
              </div>
            )}
            Teachers Go
          </a>
        </div>
      </section>
    </nav>
  );
}

export default HomepageNavbar;
