/**@jsxImportSource theme-ui*/

import { Container } from "theme-ui";

const Leap = ({ ...props }) => {
  return (
    <Container sx={{ variant: "cont" }}>
      <h2 sx={{ variant: "subt" }}>take home an Orpheus leap!</h2>
      <h1 sx={{ variant: "heading" }}>
        Grab an <span sx={{ color: "orange" }}> Orpheus Leap </span>{" "}
      </h1>
      <p sx={{ variant: "para" }}>
        The winner will get an{" "}
        <a
          href="https://leap-site.hackclub.dev/"
          sx={{
            color: "primary",
            ":hover": {
              textDecorationStyle: "wavy",
            },
          }}
        >
          {" "}
          Orpheus Leap!
        </a>{" "}
        It is an Arduino-compatible microcontroller!
      </p>
      <img
        src="https://cloud-jhumlk8xc-hack-club-bot.vercel.app/0image.png"
        alt="leap image"
        sx={{
          width: [600],
          maxWidth: "99%",
          display: "block",
          mx: "auto",
          borderRadius: [8],
        }}
      />
    </Container>
  );
};

export default Leap;
