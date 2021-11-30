import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Hackarmour is a community of hackers, devs and creative people who aim to create a community platform where everyone can learn tech stuff and mingle with the community accessibly."
          />
          <meta name="title" content="Hack Armour | The hacker's service" />
          <link rel="icon" type="image/png" sizes="32x32" href="./logo.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
