import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useGetLanguage } from "../../react-query";
import { useGetUser } from "../../react-query/user";
import { LayoutDataLanguage } from "../../data/languages/layout";
import LanguageSelect from "../common/LanguageSelect";

const GUIDE_URL = "https://document-tatugaschool.my.canva.site";

type NavItem = { title: string; href: string; external?: boolean };

function NavLink({
  link,
  current,
  className,
}: {
  link: NavItem;
  current: boolean;
  className: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.title}
      </a>
    );
  }
  return (
    <Link
      href={link.href}
      aria-current={current ? "page" : undefined}
      className={className}
    >
      {link.title}
    </Link>
  );
}

function HomepageNavbar() {
  const user = useGetUser();
  const language = useGetLanguage();
  const lang = language.data ?? "en";
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the phone menu after navigating.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  const schoolHref =
    user.data && user.data.favoritSchool
      ? `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/school/${user.data.favoritSchool}`
      : `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}`;

  const links: NavItem[] = [
    { title: LayoutDataLanguage.nav_pricing(lang), href: "/price" },
    { title: LayoutDataLanguage.nav_news(lang), href: "/news" },
    { title: LayoutDataLanguage.nav_guide(lang), href: GUIDE_URL, external: true },
    { title: LayoutDataLanguage.nav_contact(lang), href: "/support/contact-us" },
  ];

  const isCurrent = (href: string) =>
    href.startsWith("/") && router.pathname.startsWith(href);

  const accountActions = user.data ? (
    <a
      href={schoolHref}
      className="inline-flex h-10 items-center gap-2 rounded-full bg-primary-color pl-1.5 pr-4 font-semibold text-white transition-colors hover:bg-primary-color-hover active:bg-primary-color-focus"
    >
      <span className="relative h-7 w-7 overflow-hidden rounded-full bg-white">
        <Image
          src={user.data.photo}
          placeholder={user.data.blurHash ? "blur" : "empty"}
          blurDataURL={user.data.blurHash}
          fill
          className="object-cover"
          sizes="28px"
          alt=""
        />
      </span>
      {LayoutDataLanguage.nav_go_school(lang)}
    </a>
  ) : (
    <>
      <a
        href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-in`}
        className="inline-flex h-10 items-center rounded-full px-4 font-semibold text-icon-color transition-colors hover:bg-background-color"
      >
        {LayoutDataLanguage.nav_sign_in(lang)}
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/auth/sign-up`}
        className="inline-flex h-10 items-center rounded-full bg-primary-color px-5 font-semibold text-white transition-colors hover:bg-primary-color-hover active:bg-primary-color-focus"
      >
        {LayoutDataLanguage.nav_sign_up(lang)}
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-icon-color/10 bg-white/95 font-Anuphan backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:h-[4.5rem]">
        <Link
          href="/"
          aria-label={LayoutDataLanguage.nav_home(lang)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image src="/favicon.ico" fill sizes="36px" alt="" />
          </span>
          <span className="text-lg font-bold text-icon-color">Tatuga School</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                link={link}
                current={isCurrent(link.href)}
                className={`rounded-full px-3.5 py-2 font-medium transition-colors hover:bg-background-color hover:text-icon-color ${
                  isCurrent(link.href) ? "text-icon-color" : "text-icon-color/70"
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <LanguageSelect className="w-44" />
          {accountActions}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={
            menuOpen
              ? LayoutDataLanguage.nav_close_menu(lang)
              : LayoutDataLanguage.nav_open_menu(lang)
          }
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-icon-color transition-colors hover:bg-background-color lg:hidden"
        >
          {menuOpen ? (
            <MdClose aria-hidden="true" className="h-6 w-6" />
          ) : (
            <MdMenu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-icon-color/10 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  link={link}
                  current={isCurrent(link.href)}
                  className="block border-b border-icon-color/5 py-3.5 text-lg font-medium text-icon-color"
                />
              </li>
            ))}
          </ul>
          <LanguageSelect className="mt-5 w-full" />
          <div className="mt-4 flex flex-col gap-2 [&>a]:justify-center">
            {accountActions}
          </div>
        </div>
      )}
    </header>
  );
}

export default HomepageNavbar;
