import Layout from "../components/layout";
import { Hero, About, Stack, Work, Contact } from "../components/sections";

const HomePage = () => {
  return (
    <>
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
