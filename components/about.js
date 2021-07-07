/**@jsxImportSource theme-ui*/

import { Box, Button, Container, Flex } from "theme-ui";

const About = ({ ...props }) => {
  return (
    <Container sx={{ textAlign: "center", mt: [5] }}>
      <h2
        sx={{
          color: "muted",
          my: [0],
        }}
      >
        time to hack linux distros
      </h2>
      <h1 sx={{ fontSize: [4, 5], my: [0] }}>
        Make the coolest <span sx={{ color: "red" }}>linux desktop</span>
      </h1>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: [4],
          flexDirection: [
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ],
        }}
      >
        <img
          src="https://cloud-bhilv8nom-hack-club-bot.vercel.app/0image.png"
          alt="linux distro image"
          sx={{ width: [600], maxWidth: ["99%"], mx: [4, 4, 4, 4, 5] }}
        />
        <Box>
          <p sx={{ fontSize: [1, 2], textAlign: "start", mt: [0] }}>
            Welcome to Hackinux, compete with other hackers in making the
            coolest looking linux desktops to win Hack Club swags and get
            anointed as a Linux Knight via our social media handles.
          </p>
          <img
            src="https://cloud-5ak3p0yj7-hack-club-bot.vercel.app/0image.png"
            alt="linux torvald image"
            sx={{
              width: 100,
              display: ["none", "none", "none", "inline-block"],
              borderRadius: "circle",
              border: "5px solid",
              borderColor: "primary",
              transition: "2s",
              ":hover": {
                transform: "rotate(360deg)",
                //transition: "2s",
              },
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
