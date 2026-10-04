import React, { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdFacebook,
  MdLocalPhone,
  MdMenuBook,
  MdOutlineMail,
} from "react-icons/md";
import Layout from "../../layouts/HomepageLayout";
import TawkToChat from "../../components/TawkToChat";
import SEOHead from "../../components/seo/SEOHead";
import { HomeDataLanguage } from "../../data/languages/home";
import { SupportDataLanguage } from "../../data/languages/support";
import { useGetLanguage } from "../../react-query";

const EMAIL = "permlap@tatugacamp.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61573841157485";
const PHONE_TEL = "+66610277960";
const GUIDE_URL = "https://document-tatugaschool.my.canva.site";

type ChatState = "idle" | "loading" | "ready";

const secondaryAction =
  "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors";

function ContactRow({
  icon: Icon,
  title,
  detail,
  note,
  children,
}: {
  icon: IconType;
  title: string;
  detail?: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <li className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background-color text-primary-color">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold text-icon-color">{title}</h3>
          {detail && (
            <p className="mt-0.5 break-all text-icon-color/80">{detail}</p>
          )}
          <p className="mt-1 text-sm leading-relaxed text-icon-color/60">
            {note}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 gap-2 pl-[3.75rem] sm:pl-0">{children}</div>
    </li>
  );
}

function ContactPage() {
  const language = useGetLanguage();
  const lang = language.data ?? "en";
  const [chat, setChat] = useState<ChatState>("idle");
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(copiedTimer.current), []);

  const startChat = () => {
    if (chat === "ready") {
      window.Tawk_API?.maximize();
      return;
    }
    setChat("loading");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to the mail app.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Layout>
      <SEOHead
        title={SupportDataLanguage.seo_title(lang)}
        description={HomeDataLanguage.seo_description(lang)}
      />
      {chat !== "idle" && (
        <TawkToChat openOnLoad onLoad={() => setChat("ready")} />
      )}

      <main className="bg-background-color font-Anuphan">
        <header className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.2] text-icon-color sm:text-5xl sm:leading-[1.2]">
            {SupportDataLanguage.title(lang)}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-icon-color/70">
            {SupportDataLanguage.subtitle(lang)}
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <section className="flex flex-col gap-10 rounded-[2rem] bg-icon-color p-8 text-white sm:p-10 lg:self-start">
            <div>
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                {SupportDataLanguage.chat_label(lang)}
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight">
                {SupportDataLanguage.chat_title(lang)}
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-white/75">
                {SupportDataLanguage.chat_desc(lang)}
              </p>
            </div>
            <button
              type="button"
              onClick={startChat}
              disabled={chat === "loading"}
              aria-live="polite"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-icon-color transition-colors hover:bg-background-color disabled:cursor-wait disabled:opacity-80 sm:self-start"
            >
              {chat === "loading"
                ? SupportDataLanguage.chat_loading(lang)
                : SupportDataLanguage.chat_cta(lang)}
            </button>
          </section>

          <section className="rounded-[2rem] bg-white px-6 py-2 ring-1 ring-icon-color/10 sm:px-8">
            <h2 className="pt-6 text-xl font-semibold text-icon-color">
              {SupportDataLanguage.other_ways(lang)}
            </h2>
            <ul className="divide-y divide-icon-color/10">
              <ContactRow
                icon={MdOutlineMail}
                title={SupportDataLanguage.email_title(lang)}
                detail={EMAIL}
                note={SupportDataLanguage.email_note(lang)}
              >
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`${secondaryAction} text-icon-color ring-1 ring-icon-color/15 hover:ring-icon-color/40`}
                >
                  <span aria-live="polite">
                    {copied
                      ? SupportDataLanguage.copied(lang)
                      : SupportDataLanguage.copy(lang)}
                  </span>
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`${secondaryAction} bg-primary-color text-white hover:bg-primary-color-hover`}
                >
                  {SupportDataLanguage.email_cta(lang)}
                </a>
              </ContactRow>
              <ContactRow
                icon={MdFacebook}
                title={SupportDataLanguage.facebook_title(lang)}
                note={SupportDataLanguage.facebook_note(lang)}
              >
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${secondaryAction} bg-primary-color text-white hover:bg-primary-color-hover`}
                >
                  {SupportDataLanguage.facebook_cta(lang)}
                </a>
              </ContactRow>
              <ContactRow
                icon={MdLocalPhone}
                title={SupportDataLanguage.phone_title(lang)}
                detail={SupportDataLanguage.phone_number(lang)}
                note={SupportDataLanguage.phone_note(lang)}
              >
                <a
                  href={`tel:${PHONE_TEL}`}
                  className={`${secondaryAction} bg-primary-color text-white hover:bg-primary-color-hover`}
                >
                  {SupportDataLanguage.phone_cta(lang)}
                </a>
              </ContactRow>
              <ContactRow
                icon={MdMenuBook}
                title={SupportDataLanguage.guide_title(lang)}
                note={SupportDataLanguage.guide_note(lang)}
              >
                <a
                  href={GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${secondaryAction} text-icon-color ring-1 ring-icon-color/15 hover:ring-icon-color/40`}
                >
                  {SupportDataLanguage.guide_cta(lang)}
                </a>
              </ContactRow>
            </ul>
          </section>
        </div>

        <p className="mx-auto max-w-6xl px-4 pb-20 text-icon-color/70 sm:px-6">
          {SupportDataLanguage.privacy_note(lang)}{" "}
          <Link
            href="/support/privacy-policy"
            className="font-medium text-primary-color underline underline-offset-4"
          >
            {SupportDataLanguage.privacy_link(lang)}
          </Link>
        </p>
      </main>
    </Layout>
  );
}

export default ContactPage;
