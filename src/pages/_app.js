"use client";

import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lopez | Software Builder, Blockchain & AI Agents</title>
        <meta name="description" content="Software builder and architect creating high-quality full-stack products, blockchain infrastructure and AI agent systems." />
        <meta property="og:title" content="Lopez | Software Builder, Blockchain & AI Agents" />
        <meta property="og:description" content="High-quality software engineering, blockchain infrastructure, AI agents and MCP integrations." />
        <meta property="og:image" content="/assets/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
