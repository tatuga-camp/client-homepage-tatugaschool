import Image from "next/image";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";

const VIDEO_ID = "aZ8dskE93ZA";

/**
 * Shows the YouTube thumbnail until someone presses play, so the page doesn't
 * load YouTube's player (and its cookies) for visitors who never watch.
 */
function VideoTour({ language }: { language: Language }) {
  const [playing, setPlaying] = useState(false);
  const title = HomeDataLanguage.video_heading(language);

  return (
    <section className="bg-background-color py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold leading-tight text-icon-color sm:text-4xl">
          {title}
        </h2>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-[2rem] bg-icon-color">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-color shadow-[0_18px_40px_-12px_rgba(56,55,103,0.6)] transition-transform group-hover:scale-105 group-active:scale-95">
                <MdPlayArrow aria-hidden="true" className="h-10 w-10" />
              </span>
              <span className="sr-only">{HomeDataLanguage.video_play(language)}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoTour;
