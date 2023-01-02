import Head from "next/head";
import Banner from "@/components/Banner";

import Navbar from "@/components/Navbar";
import Hero from "@/landing/Hero";
import Features from "@/landing/Features";
import Pricing from "@/landing/Pricing";
import FAQs from "@/landing/FAQs";

import Match from "@/components/Homepage/Match";

import Footer from "@/components/Footer";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Union</title>
        <meta name="description" content="Discover a different way to date" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <Navbar session={session} />

        {status == "unauthenticated" ? (
          <>
            <Hero />
            <Features />
            <Pricing />
            <FAQs />
          </>
        ) : (
          <Match session={session} />
        )}
        <Footer />
      </main>
    </>
  );
}
