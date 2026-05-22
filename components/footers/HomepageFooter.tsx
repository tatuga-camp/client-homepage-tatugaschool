import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomepageFooter() {
  return (
    <footer className="h-max py-20 bg-[#15171A] grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-5 font-Anuphan">
      <section className="col-span-2 flex flex-col items-start justify-start gap-5 p-10">
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white rounded-full relative">
            <Image
              src="/icon.svg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="logo tatuga school"
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white">Tatuga School</h1>
        </div>
        <p className="text-gray-400 font-medium">
          Tatuga School is a platform that provides a variety of learning
          methods and materials for students.
        </p>
        <a href="https://tatugacamp.com" className="text-gray-400 font-medium">
          © 2024 Tatuga Camp LP. All rights reserved.
        </a>
      </section>
      <section className="flex flex-col items-start justify-start gap-2 p-10">
        <h1 className=" font-bold text-white">Support</h1>
        <Link href="/support/contact-us" className="text-gray-400 mt-2 ">
          Contact us
        </Link>
        <Link href="/support/privacy-policy" className="text-gray-400 ">
          Privacy policy & Terms of service
        </Link>
      </section>
      <section className="flex flex-col items-start justify-start gap-2 p-10">
        <h1 className=" font-bold text-white">Product</h1>
        <Link href="/" className="text-gray-400 mt-2 ">
          Tatuga School
        </Link>
        <Link
          target="_blank"
          href="https://tatugacamp.com/classroom"
          className="text-gray-400 "
        >
          Tatuga Class
        </Link>
        <Link href="/news" className="text-gray-400 ">
          News
        </Link>
      </section>
      <section className="flex flex-col items-start justify-start gap-2 p-10">
        <h1 className=" font-bold text-white">Resources</h1>
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-in`}
          className="text-gray-400 mt-2 "
        >
          Login
        </Link>
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-up`}
          className="text-gray-400 "
        >
          Register
        </Link>
        <Link
          target="_blank"
          href="https://tatugacamp.com/about-us"
          className="text-gray-400 "
        >
          about us
        </Link>
        <Link
          target="_blank"
          href="https://document-tatugaschool.my.canva.site"
          className="text-gray-400 "
        >
          document
        </Link>
        <Link href="/price" className="text-gray-400 ">
          Pricing and Plans
        </Link>
      </section>
    </footer>
  );
}

export default HomepageFooter;
