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
