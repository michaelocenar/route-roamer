import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&family=Orbitron:wght@400;600&family=Work+Sans:wght@200;300;400&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
