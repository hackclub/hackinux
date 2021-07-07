/**@jsxImportSource theme-ui*/

import { Box, Container, Flex } from "theme-ui";

const Hero = (props) => {
  return (
    <Box
      sx={{
        height: [400],
        position: "relative",

        ":hover:after": {
          transform: "rotate(360deg)",
        },
        ":after": {
          content: `""`,
          display: "inline-block",
          width: [80, 100],
          height: [80, 100],
          backgroundImage: "url(./linux.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "circle",
          border: "3px solid white",

          position: "absolute",
          bottom: [0, -30, -40],
          right: [3, 4],
          zIndex: 5,

          transition: "2s",
        },
      }}
    >
      <Box
        {...props}
        sx={{
          height: ["100%"],
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          autoPlay
          muted
          loop
          sx={{
            position: "absolute",
            top: 0,
            width: ["200vw", "130vw", "100vw"],
          }}
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>

        <Flex
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            color: "white",
            textAlign: "center",
            py: [2],
            h1: {
              fontSize: [5, 6],
              mb: [0],
              textShadow: "1px 1px 2px",
            },
            p: {
              fontSize: [2, 2, 3],
              fontWeight: "bold",
              textShadow: "0px 0px 1px",
            },
          }}
        >
          <h1 sx={{}}>
            Hack
            <span
              sx={{
                color: "primary",
              }}
            >
              inux
            </span>{" "}
          </h1>
          <p>
            Make the coolest looking Linux distro and get anointed as a{" "}
            <span
              sx={{
                color: "orange",
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
              }}
            >
              {" "}
              Linux Knight!
            </span>
          </p>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
