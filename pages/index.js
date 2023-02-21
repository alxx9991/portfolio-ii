import Layout from "../components/layout";
import { Hero, About, Stack, Work, Contact } from "../components/sections";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Alex Lin</title>
        <meta
          name="Description"
          content="Portfolio site showcasing some of Alex's work"
        ></meta>
        <link rel="shortcut icon" href="/A.png" />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Semibold.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <Layout>
        <Hero></Hero>
        <About></About>
        <Stack></Stack>
        <Work></Work>
        <Contact></Contact>
      </Layout>
    </>
  );
};

export default HomePage;
