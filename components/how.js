/**@jsxImportSource theme-ui*/

import { Container, Box, Grid } from "theme-ui";
import { lighten } from "@theme-ui/color";

const How = ({ ...props }) => {
  return (
    <Container {...props} sx={{ textAlign: "center", variant: "cont" }}>
      <h2 sx={{ variant: "subt" }}> so how do I participate?</h2>
      <h1 sx={{ variant: "heading" }}>
        {" "}
        <span
          sx={{
            color: "blue",
            variant: "wavy",
          }}
        >
          Join Our Slack!{" "}
        </span>{" "}
      </h1>
      <p sx={{ textAlign: "start", variant: "para" }}>
        We are organizing Hackinux via our slack. Our slack is a community of
        thousands of hackers and is
        <a
          href="https://hackclub.com/slack"
          sx={{
            color: "red",
            variant: "wavy",
          }}
        >
          {" "}
          free to join!{" "}
        </a>
      </p>

      <Grid columns={[1, 1, 2]} sx={{ px: [4, 5, 6], py: [1] }}>
        {data.map((props) => (
          <Card {...props} />
        ))}
      </Grid>
    </Container>
  );
};

const Card = ({ title, Para, url, bg, ...props }) => {
  return (
    <Box
      sx={{
        mt: [2],
        py: [4],
        px: [2],
        bg: bg ?? "red",
        color: "white",
        borderRadius: [8],
        position: "relative",

        ":after": {
          content: `""`,
          width: [50, 60],
          height: [50, 60],
          display: "block",
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          position: "absolute",
          right: [2],
          bottom: [-20],
        },
      }}
    >
      <h2>{title}</h2>
      <Para />
    </Box>
  );
};

const data = [
  {
    title: "#hackinux",
    url: "https://cloud-hn8z45vqf-hack-club-bot.vercel.app/0image.png",
    Para: () => (
      <p>
        go to{" "}
        <a sx={{ color: "white" }} href="slack">
          {" "}
          #hackinux
        </a>{" "}
        on Hack Club's Slack and submit a 3-5 min video explaining your Linux
        Desktop setup!
      </p>
    ),
  },
  {
    title: "before 31st July!",
    url: "https://cloud-9rnz75e7k-hack-club-bot.vercel.app/0image.png",
    bg: "purple",
    Para: () => (
      <p>
        You can make your submissions by 31st of July, We will anounce the
        winner by the 1st week of August!
      </p>
    ),
  },
];

export default How;
