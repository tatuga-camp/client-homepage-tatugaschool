import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getLocalStorage, removeLocalStorage } from "../utils";
import { Language } from "../interfaces";
import {
  resolveClientLanguage,
  serializeLangCookie,
} from "../lib/languagePreference";

/**
 * The visitor's language in the browser, from the `lang` cookie the server
 * also renders with (see lib/languagePreference.ts). A choice the old
 * switcher left in localStorage is moved into the cookie here.
 */
export function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const { language, fromLegacy } = resolveClientLanguage({
    cookie: document.cookie,
    legacyStored: getLocalStorage("language"),
    navigatorLanguage: window.navigator?.language ?? "",
  });
  if (fromLegacy) {
    document.cookie = serializeLangCookie(language);
    removeLocalStorage("language");
  }
  return language;
}

export function useGetLanguage() {
  return useQuery({
    queryKey: ["language"],
    queryFn: () => detectInitialLanguage(),
  });
}

export function useUpdateLanguage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["language"],
    mutationFn: (request: Language) => {
      // The cookie is what the server reads on the next page load.
      document.cookie = serializeLangCookie(request);
      removeLocalStorage("language");
      queryClient.setQueryData(["language"], request);
      return Promise.resolve(request); // Ensure it returns a Promise
    },
  });
}
