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
  // mock user details
  const user = {
    name: "Bob",
    notifications: [{ id: 1, read: true, message: "You have a new match!" }],
    gender_pref: ["S", "T", "H", "O"],
    matches: [
      {
        id: 1,
        name: "Sam",
        gender: "T",
        values: ["honesty", "kindness"],
        badges: [],
        photo: null,
        intro:
          "I found a rock in a Waltmart parking lot yesterday shaped like a poptart",
        match_level: "LEVEL_1",
      },
      {
        id: 2,
        name: "Claire",
        gender: "S",
        values: ["honesty"],
        badges: ["heart", "star", "dialog"],
        photo: null,
        intro: "Seeking a step-dad for my pomeranian Mikey Bobikey",
        match_level: "LEVEL_1",
      },
      {
        id: 3,
        name: "Terry",
        gender: "O",
        values: ["honesty", "kindness", "acceptance"],
        badges: ["dialog"],
        photo: null,
        intro: "I dunno what to write here",
        match_level: "LEVEL_2",
      },
      {
        id: 4,
        name: "Craig",
        gender: "H",
        values: ["honesty", "kindness", "acceptance", "loyalty"],
        badges: ["heart"],
        photo: null,
        intro: "Beer. Fishing. Trucks. Hallmark Movies.",
        match_level: "LEVEL_1",
      },
    ],
  };
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
        <Navbar session={session} user={user} />
        {status == "loading" ? null : status == "unauthenticated" ? (
          <>
            <Hero />
            <Features />
            <Pricing />
            <FAQs />
          </>
        ) : (
          <Match session={session} user={user} />
        )}
        <Footer />
      </main>
    </>
  );
}
