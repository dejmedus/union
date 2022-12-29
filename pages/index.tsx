import Head from "next/head";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
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
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <FAQs />
        <Footer />
      </main>
    </>
  );
}
