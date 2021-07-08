/**@jsxImportSource theme-ui*/

import { Box, Container, Grid } from "theme-ui";

const What = ({ ...props }) => {
  return (
    <Container {...props} sx={{ mt: [5] }}>
      <h2 sx={{ variant: "subt" }}>what can I hack? </h2>
      <h1 sx={{ variant: "heading" }}>
        Hack{" "}
        <span
          sx={{
            color: "orange",
            textDecorationLine: "underline",
            textDecorationStyle: "wavy",
          }}
        >
          {" "}
          Anything Linux!{" "}
        </span>{" "}
      </h1>
      <p sx={{ variant: "para" }}>
        In Linux distros everything is customizable and this is why hackers love
        it! You can hack anything from your Terminal to your Desktop Icons!
      </p>
      <Grid columns={[1, 1, 2]}>
        {data.map((props) => (
          <Card {...props} />
        ))}
      </Grid>
    </Container>
  );
};

const Card = ({ url, title, Para, ...props }) => {
  return (
    <Box sx={{ py: [2], px: [2], borderRadius: [8] }} {...props}>
      <Box
        sx={{
          backgroundImage: ` url(${url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: 300,
        }}
      >
        {" "}
      </Box>
      <h2
        sx={{
          textAlign: "center",
          fontSize: [3],
          //mt: [0],
        }}
      >
        {title}
      </h2>
      <Para />
    </Box>
  );
};

const data = [
  {
    url: `https://cloud-d8a0ivt2r-hack-club-bot.vercel.app/0image.png`,
    title: "Beautiful Terminals!",
    Para: () => (
      <p>
        You can configure your terminal the way you like in Linux distros!
        <ul>
          <li>Use crazy fonts!</li>
          <li>use nerdy icons!</li>
          <li>create beautiful workflows, and much more</li>
        </ul>
      </p>
    ),
  },
  {
    url: `https://cloud-bpsurfa51-hack-club-bot.vercel.app/0image.png`,
    title: "Jaw-Dropping Layouts!",
    Para: () => (
      <p>
        In Linux Distros, you can customize the Layout of your screen! You can
        use a variety of Desktop Environments and can configure them the way
        your heart desires!{" "}
      </p>
    ),
  },
];

export default What;
