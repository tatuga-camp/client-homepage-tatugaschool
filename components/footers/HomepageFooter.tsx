import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetLanguage } from "../../react-query";
import { LayoutDataLanguage } from "../../data/languages/layout";

const GUIDE_URL = "https://document-tatugaschool.my.canva.site";

function HomepageFooter() {
  const language = useGetLanguage();
  const lang = language.data ?? "en";
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_CLIENT_URL;

  const columns = [
    {
      title: LayoutDataLanguage.footer_product(lang),
      links: [
        { title: LayoutDataLanguage.nav_pricing(lang), href: "/price" },
        { title: LayoutDataLanguage.nav_news(lang), href: "/news" },
        { title: LayoutDataLanguage.nav_guide(lang), href: GUIDE_URL, external: true },
      ],
    },
    {
      title: LayoutDataLanguage.footer_support(lang),
      links: [
        { title: LayoutDataLanguage.nav_contact(lang), href: "/support/contact-us" },
        {
          title: LayoutDataLanguage.footer_privacy(lang),
          href: "/support/privacy-policy",
        },
        {
          title: LayoutDataLanguage.footer_about(lang),
          href: "https://tatugacamp.com/about-us",
          external: true,
        },
      ],
    },
    {
      title: LayoutDataLanguage.footer_account(lang),
      links: [
        { title: LayoutDataLanguage.nav_sign_in(lang), href: `${mainUrl}/auth/sign-in` },
        { title: LayoutDataLanguage.nav_sign_up(lang), href: `${mainUrl}/auth/sign-up` },
        {
          title: LayoutDataLanguage.footer_students(lang),
          href: `${process.env.NEXT_PUBLIC_STUDENT_CLIENT_URL}`,
        },
      ],
    },
  ];

  return (
    <footer className="bg-icon-color font-Anuphan text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <section className="flex max-w-sm flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 rounded-full bg-white">
              <Image
                src="/icon.svg"
                fill
                sizes="40px"
                alt=""
                className="object-contain"
              />
            </span>
            <span className="text-2xl font-bold">Tatuga School</span>
          </div>
          <p className="leading-relaxed text-white/70">
            {LayoutDataLanguage.footer_tagline(lang)}
          </p>
        </section>

        {columns.map((column) => (
          <section key={column.title} className="flex flex-col gap-3">
            <h2 className="font-semibold">{column.title}</h2>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={
                        "external" in link && link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/60 sm:px-6">
          <a href="https://tatugacamp.com" className="hover:text-white">
            {LayoutDataLanguage.footer_copyright(lang, new Date().getFullYear())}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default HomepageFooter;
