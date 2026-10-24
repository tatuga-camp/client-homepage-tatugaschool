import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";
import {
  MASCOTS,
  MAX_PLAYING,
  type Mascot,
  type MascotVideoFormat,
  mascotVideoFormat,
  pickIdleMascot,
} from "../../utils/mascots";

const IDLE_TICK_MS = 2500;

// Soft brand tints behind the characters, cycled across the grid.
const TINTS = [
  "bg-primary-color/10",
  "bg-warning-color/25",
  "bg-success-color/15",
  "bg-secondary-color/15",
  "bg-error-color/10",
];

const randomItem = <T,>(list: T[]) =>
  list[Math.floor(Math.random() * list.length)];

function MascotTile({
  mascot,
  clip,
  tint,
  label,
  onTap,
  onDone,
}: {
  mascot: Mascot;
  /** URL of the clip to play now, or null to show the still picture. */
  clip: string | null;
  tint: string;
  label: string;
  onTap: () => void;
  onDone: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shown, setShown] = useState(false);

  // Start by hand rather than with `autoPlay`: if the browser refuses (iOS
  // Low Power Mode blocks even muted autoplay) the tile frees its slot and
  // keeps the still picture.
  useEffect(() => {
    setShown(false);
    const video = videoRef.current;
    if (!clip || !video) return;
    video.muted = true;
    video.play().catch(onDone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clip]);

  return (
    <li className="w-[calc((100%-1.5rem)/3)] sm:w-[calc((100%-4rem)/5)] lg:w-[calc((100%-6rem)/7)]">
      <button
        type="button"
        onClick={onTap}
        aria-label={label}
        className={`group relative block aspect-square w-full touch-manipulation select-none overflow-hidden rounded-3xl ${tint} transition-transform duration-200 [-webkit-tap-highlight-color:transparent] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-2 active:scale-95`}
      >
        <Image
          fill
          src={mascot.poster}
          alt=""
          draggable={false}
          sizes="(min-width: 1024px) 150px, (min-width: 640px) 20vw, 33vw"
          className={`object-contain ${shown ? "opacity-0" : "opacity-100"}`}
        />
        {clip && (
          <video
            key={clip}
            ref={videoRef}
            src={clip}
            muted
            playsInline
            disablePictureInPicture
            preload="auto"
            aria-hidden
            onPlaying={() => setShown(true)}
            onEnded={onDone}
            onError={onDone}
            className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </button>
    </li>
  );
}

/**
 * Every student avatar mascot in one class photo. A couple at a time play a
 * random clip while the section is on screen, and tapping one plays it.
 * Clips stream straight from R2 only when played; every clip starts and ends
 * on the poster pose, so swapping between picture and video is invisible.
 */
function MascotClass({ language }: { language: Language }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [format, setFormat] = useState<MascotVideoFormat | null>(null);
  // Mascot id → clip URL playing on that tile.
  const [playing, setPlaying] = useState<Record<number, string>>({});
  // Updated synchronously so several taps in one tick still respect the cap.
  const playingRef = useRef(playing);

  const update = (next: Record<number, string>) => {
    playingRef.current = next;
    setPlaying(next);
  };

  useEffect(() => {
    setFormat(
      mascotVideoFormat(
        navigator.userAgent,
        document
          .createElement("video")
          .canPlayType('video/mp4; codecs="hvc1"') !== "",
      ),
    );
  }, []);

  const play = useCallback(
    (mascot: Mascot) => {
      if (!format) return;
      const current = playingRef.current;
      // A tap on a mascot that is already moving lets it finish.
      if (current[mascot.id]) return;
      if (Object.keys(current).length >= MAX_PLAYING) return;
      const clip = randomItem(mascot.clips)[format];
      update({ ...current, [mascot.id]: clip });
    },
    [format],
  );

  const done = useCallback((id: number) => {
    if (!(id in playingRef.current)) return;
    const next = { ...playingRef.current };
    delete next[id];
    update(next);
  }, []);

  // Random plays while the section is on screen and motion is welcome.
  useEffect(() => {
    const node = sectionRef.current;
    if (!format || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const observer = new IntersectionObserver(([record]) => {
      visible = record.isIntersecting;
    });
    observer.observe(node);
    const timer = window.setInterval(() => {
      if (!visible || document.hidden) return;
      const id = pickIdleMascot(
        MASCOTS.map((mascot) => mascot.id),
        Object.keys(playingRef.current).map(Number),
      );
      const mascot = MASCOTS.find((item) => item.id === id);
      if (mascot) play(mascot);
    }, IDLE_TICK_MS);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [format, play]);

  return (
    <section
      ref={sectionRef}
      className="border-t border-icon-color/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-icon-color sm:text-4xl">
            {HomeDataLanguage.mascots_heading(language)}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-icon-color/70">
            {HomeDataLanguage.mascots_body(language)}
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {MASCOTS.map((mascot, index) => (
            <MascotTile
              key={mascot.id}
              mascot={mascot}
              clip={playing[mascot.id] ?? null}
              tint={TINTS[index % TINTS.length]}
              label={HomeDataLanguage.mascot_play_label(language, mascot.id)}
              onTap={() => play(mascot)}
              onDone={() => done(mascot.id)}
            />
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-icon-color/50">
          {HomeDataLanguage.mascots_hint(language)}
        </p>
      </div>
    </section>
  );
}

export default MascotClass;
