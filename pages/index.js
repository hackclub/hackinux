import {
  Layout,
  Hero,
  About,
  What,
  How,
  Prize,
  Who,
  Meta,
  Leap,
} from "../components/index";

const Page = () => {
  return (
    <Layout>
      <Meta description={description} image={og_url} />
      <Hero />
      <About />
      <What />
      <How />
      <Prize />
      <Leap />
      <Who />
    </Layout>
  );
};

const description = `Welcome to Hackinux, compete with other hackers in making the coolest looking Linux desktops to win Hack Club swags and get anointed as a Linux Knight via our social media handles.`;

const og_url = `https://cloud-pdxk1ojdg-hack-club-bot.vercel.app/0image.png`;

export default Page;
