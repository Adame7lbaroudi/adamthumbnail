import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script data-ad-client="YOUR_ADSENSE_CLIENT_ID" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
        <h4 className="text-cyan-400" style={{position:"absolute", top:"15px",right:"35px",color:"#25CDF0",fontWeight:"700"}} > By Adam Elbaroudi</h4>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
