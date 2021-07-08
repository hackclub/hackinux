/**@jsxImportSource theme-ui*/

import { Button, Container, Box, Grid } from "theme-ui";

const Prize = ({ ...props }) => {
  return (
    <Container sx={{ variant: "cont" }}>
      <h2 sx={{ variant: "subt" }}>what will the best hacker get?</h2>
      <h1 sx={{ variant: "heading" }}>
        Win Hack Club{" "}
        <span
          sx={{
            variant: "wavy",
            color: "red",
          }}
        >
          {" "}
          Stickers!{" "}
        </span>{" "}
      </h1>
      <p sx={{ variant: "para" }}>
        We will ship{" "}
        <a
          sx={{
            fontWeight: "bold",
            color: "blue",
          }}
          href="https://hackclub.com/stickers/"
        >
          {" "}
          Hack Club stickers{" "}
        </a>{" "}
        for free to the winner of Hackinux and we will also anoint them as{" "}
        <span sx={{ color: "orange", fontWeight: "bold" }}>
          Linux Knight
        </span>{" "}
        via our social media handles {"{a shoutout }"}.
      </p>

      <Grid
        columns={[1, 2, 2, 3]}
        sx={{
          justifyItems: "center",
          alignItems: "center",
          px: [5],
        }}
      >
        {data.map((src, idx) => (
          <img
            sx={{ width: [200], my: [4] }}
            src={src}
            alt={`sticker image ${idx}`}
          />
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: [3] }}>
        <Button as="a" href="https://hackclub.com/stickers" sx={{ mx: "auto" }}>
          See More
        </Button>
      </Box>
    </Container>
  );
};

const data = [
  "https://cloud-lvz35ahwp-hack-club-bot.vercel.app/0image.png",
  "https://cloud-309latvmw-hack-club-bot.vercel.app/0image.png",
  "https://cloud-8pml9kbtr-hack-club-bot.vercel.app/0image.png",
  "https://cloud-2ve3xetoa-hack-club-bot.vercel.app/0image.png",
  "https://cloud-n25zcfnpc-hack-club-bot.vercel.app/0image.png",
  "https://cloud-ojonnu4i5-hack-club-bot.vercel.app/0image.png",
];

export default Prize;
