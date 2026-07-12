"use client";

import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lopez Onchain — Software Architect & Web3 Builder</title>
        <meta name="description" content="Software architect building full-stack Web3 products, AI agent systems, MCP integrations and smart contracts." />
        <meta property="og:title" content="Lopez Onchain — Software Architect & Web3 Builder" />
        <meta property="og:description" content="Full-stack Web3, AI agents, MCP integrations and onchain systems." />
        <meta property="og:image" content="/assets/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
