import {
  Layout,
  Hero,
  About,
  What,
  How,
  Prize,
  Who,
} from "../components/index";

const Page = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <What />
      <How />
      <Prize />
      <Who />
    </Layout>
  );
};

export default Page;
