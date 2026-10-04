import { useEffect } from "react";

const TAWK_TO_PROPERTY_ID = "67dade5ac029cf190fdd8c17";
const TAWK_TO_WIDGET_ID = "1imnf9548";

type Props = {
  /** Open the chat window as soon as the widget has loaded. */
  openOnLoad?: boolean;
  /** Called once the widget is ready to use. */
  onLoad?: () => void;
};

const TawkToChat = ({ openOnLoad = false, onLoad }: Props) => {
  useEffect(() => {
    // Tawk only reads callbacks that exist before its script runs.
    window.Tawk_API = window.Tawk_API || ({} as Window["Tawk_API"]);
    window.Tawk_API.onLoad = () => {
      window.Tawk_API.setAttributes({ name: "Visiter" }, (error) => {
        if (error) console.error("Tawk setAttributes Error:", error);
      });
      if (openOnLoad) window.Tawk_API.maximize();
      onLoad?.();
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_TO_PROPERTY_ID}/${TAWK_TO_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const tawkIframe = document.getElementById("tawkto-container");
      if (tawkIframe) {
        tawkIframe.remove();
      }
    };
    // Load the widget once per mount; later prop changes don't reload it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default TawkToChat;
