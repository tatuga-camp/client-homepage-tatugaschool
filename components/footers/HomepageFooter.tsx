import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomepageFooter() {
  return (
    <footer className="h-max py-20 bg-[#15171A] grid grid-cols-6 gap-5 font-Anuphan">
      <section className="col-span-2 flex flex-col items-start justify-start gap-5 p-10">
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white rounded-full relative">
            <Image
              src="/icon.svg"
              fill
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
        <p className="text-gray-400 font-medium">
          © 2024 Tatuga School. All rights reserved.
        </p>
      </section>
      <section className="flex flex-col items-start justify-start gap-2 p-10">
        <h1 className=" font-bold text-white">Support</h1>
        <Link href="/support/contact-us" className="text-gray-400 mt-2 ">
          Contact us
        </Link>
        <Link href="/support/help-center" className="text-gray-400 ">
          Help center
        </Link>
        <Link href="/support/privacy-policy" className="text-gray-400 ">
          Privacy policy
        </Link>
        <Link href="/support/terms-service" className="text-gray-400 ">
          Terms of service
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
      </section>
      <section className="flex flex-col items-start justify-start gap-2 p-10">
        <h1 className=" font-bold text-white">Resources</h1>
        <Link href="/auth/sign-in" className="text-gray-400 mt-2 ">
          Login
        </Link>
        <Link href="/auth/sign-up" className="text-gray-400 ">
          Register
        </Link>
        <Link href="/about-us" className="text-gray-400 ">
          about us
        </Link>
        <Link href="/subscription" className="text-gray-400 ">
          subscription
        </Link>
      </section>
    </footer>
  );
}

export default HomepageFooter;
