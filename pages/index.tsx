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
  // const session = {
  //   user_name: "Bob",
  //   notifications: {
  //     read: [],
  //     unread: [],
  //   },
  //   multi_gender_pref: true,
  //   matches: [
  //     {
  //       id: 1,
  //       name: "Sam",
  //       gender: "t",
  //       values: ["honesty", "kindness"],
  //       badges: [],
  //       photo: null,
  //       intro:
  //         "I found a rock in a Waltmart parking lot yesterday shaped like a poptart",
  //       match_level: "level_1",
  //     },
  //     {
  //       id: 2,
  //       name: "Claire",
  //       gender: "s",
  //       values: ["honesty"],
  //       badges: ["heart", "star", "dialog"],
  //       photo: null,
  //       intro: "Seeking a step-dad for my pomeranian Mikey Bobikey",
  //       match_level: "level_1",
  //     },
  //     {
  //       id: 3,
  //       name: "Terry",
  //       gender: "o",
  //       values: ["honesty", "kindness", "acceptance"],
  //       badges: ["dialog"],
  //       photo: null,
  //       intro: "I dunno what to write here",
  //       match_level: "level_2",
  //     },
  //     {
  //       id: 4,
  //       name: "Craig",
  //       gender: "h",
  //       values: ["honesty", "kindness", "acceptance", "loyalty"],
  //       badges: ["heart"],
  //       photo: null,
  //       intro: "Beer. Fishing. Trucks. Hallmark Movies.",
  //       match_level: "level_1",
  //     },
  //   ],
  // };

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
