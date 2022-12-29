import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { Chivo_Mono } from "@next/font/google";
import { Unbounded } from "@next/font/google";

const chivo = Chivo_Mono();
const unbounded = Unbounded();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --unbounded-font: ${unbounded.style.fontFamily};
          --chivo-font: ${chivo.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
