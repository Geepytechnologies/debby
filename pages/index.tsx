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
import Books from "@/components/Books";
import TheHead from "@/components/TheHead";

export default function Home() {
  return (
    <>
      <TheHead />
      <main className={styles.main}>
        <Header />
        <Hero />
        <Videos />
        {/* <Features /> */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <Books />
        <Podcast />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
