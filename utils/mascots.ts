// The student avatar mascots shown on the homepage. Same R2 clips as the
// teacher app (client-main `utils/mascot.ts`); only the happy clips are used
// here. Keep the two lists in sync when a mascot is added.

/**
 * One animation in both transparent formats: VP9 WebM for Chrome, Edge and
 * Firefox, HEVC-with-alpha MOV for Safari and every iOS browser.
 */
export type MascotClip = { webm: string; hevc: string };

export type MascotVideoFormat = keyof MascotClip;

export type Mascot = {
  id: number;
  /** Still image shown until a clip plays, and between plays. */
  poster: string;
  /** Every clip's first and last frames match the poster. */
  clips: MascotClip[];
};

const MASCOT_BASE = "https://storage.tatugaschool.com/AVATAR/animation";

const mascot = (id: number, names: string[]): Mascot => {
  const folder = `${MASCOT_BASE}/mascot_${id}`;
  return {
    id,
    poster: `${folder}/original.png`,
    clips: names.map((name) => {
      const base = `${folder}/${encodeURIComponent(name)}`;
      return { webm: `${base}.webm`, hevc: `${base}.mov` };
    }),
  };
};

// In the order of the student avatar picker (AVATAR/1.png … AVATAR/20.png).
export const MASCOTS: Mascot[] = [
  mascot(1, ["Does a happy dance", "Waves hello"]),
  mascot(2, ["Be quiet gesture", "Laughs out loud"]),
  mascot(3, ["Does a happy dance", "Laughs out loud"]),
  mascot(4, ["Does a happy dance", "Waves hello"]),
  mascot(5, ["Does a happy dance", "Waves hello"]),
  mascot(6, ["Does a happy dance", "Waves hello"]),
  mascot(7, ["Does a happy dance", "Waves hello"]),
  mascot(8, ["Does a happy dance", "Laughs out loud"]),
  mascot(9, ["Does a happy dance", "Laughs out loud"]),
  mascot(10, ["Does a happy dance", "Waves hello"]),
  mascot(11, ["Does a funny dance", "Does smart show-off pose"]),
  mascot(12, ["Does a happy dance", "Does cute pose"]),
  mascot(13, ["Does a smart cool", "Jumps for joy"]),
  mascot(14, ["Spin and say hello", "Does a happy dance", "Does a B-boy dance"]),
  mascot(15, ["Jumps for joy", "Laughs out loud"]),
  mascot(16, ["Jumps for joy", "Laughs out loud", "Be quiet gesture"]),
  mascot(17, ["Does a cute funny", "Nods yes with happy"]),
  mascot(18, ["Waves hello", "Does a cute dance"]),
  mascot(19, ["Do muslim greet gesture", "Jumps for joy"]),
  mascot(20, ["Do muslim greet gesture", "Does a happy Thai"]),
];

/**
 * Most mascot videos playing at once. Transparent video is decoded in
 * software on Chrome and Firefox, and Safari has few hardware decoders.
 */
export const MAX_PLAYING = 6;

/** Random (idle) plays only start while fewer than this many play. */
export const MAX_IDLE_PLAYING = 2;

/**
 * Which transparent format this browser can draw, or null to keep the still
 * picture. WebKit (Safari, and every browser on iOS/iPadOS) draws WebM alpha
 * as a black box but plays HEVC alpha; Chromium plays HEVC on some machines
 * yet ignores its alpha layer, so everything else gets WebM.
 *
 * @param canPlayHevc `video.canPlayType('video/mp4; codecs="hvc1"') !== ""`
 */
export function mascotVideoFormat(
  userAgent: string,
  canPlayHevc: boolean,
): MascotVideoFormat | null {
  const webKitOnly =
    /AppleWebKit/.test(userAgent) &&
    !/Chrome\/|Chromium\/|Edg\//.test(userAgent);
  if (!webKitOnly) return "webm";
  return canPlayHevc ? "hevc" : null;
}

/**
 * The mascot to start on this idle tick, or null when enough are already
 * playing (`playing` counts every play, idle or tapped) or none are free.
 */
export function pickIdleMascot(
  ids: number[],
  playingIds: number[],
  random: () => number = Math.random,
): number | null {
  if (playingIds.length >= MAX_IDLE_PLAYING) return null;
  const free = ids.filter((id) => !playingIds.includes(id));
  if (free.length === 0) return null;
  return free[Math.floor(random() * free.length)];
}
