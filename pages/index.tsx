import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Podcast from "@/components/Podcast";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dcryptgirl</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpeg" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Videos />
        <Features />
        <Portfolio />
        <Podcast />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
