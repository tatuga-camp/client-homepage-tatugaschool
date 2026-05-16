import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { detectLanguage, type Lang } from "../lib/seo/detectLanguage";

type MyDocProps = DocumentInitialProps & { lang: Lang };

class MyDocument extends Document<MyDocProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<MyDocProps> {
    const initial = await Document.getInitialProps(ctx);
    let lang: Lang = "en";
    if (ctx.req) {
      const cookieHeader = ctx.req.headers.cookie ?? "";
      const m = cookieHeader.match(/(?:^|;\s*)lang=([^;]+)/);
      lang = detectLanguage({
        cookie: m ? decodeURIComponent(m[1]) : null,
        acceptLanguage: (ctx.req.headers["accept-language"] as string) ?? null,
        country: (ctx.req.headers["x-country"] as string) ?? null,
      });
    }
    return { ...initial, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
