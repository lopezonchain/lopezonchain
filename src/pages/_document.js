import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Lopez Onchain</title>
        {/* Charset, viewport y descripción */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Onchain Software Developer"
        />
        <meta name="keywords" content="blockchain, developer, software"/>
        <meta name="author" content="Lopez" />
        <meta name='fc:frame' content='{"version":"next","imageUrl":"https://lopezonchain.xyz/assets/profile.png","aspectRatio":"3:2","button":{"title":"🚀Join Lopez Onchain Universe🚀","action":{"type":"launch_frame","name":"Lopez Onchain Universe","url":"https://lopezonchain.xyz","splashImageUrl":"https://lopezonchain.xyz/splash.png","splashBackgroundColor":"#001c2a"}}}' />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Icono para dispositivos Apple 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}

        {/* Manifest para Progressive Web App 
        <link rel="manifest" href="/site.webmanifest" />*/}

        {/* Otros metadatos opcionales */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
