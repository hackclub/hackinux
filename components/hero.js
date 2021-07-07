/**@jsxImportSource theme-ui*/

import { Box, Container, Flex } from "theme-ui";

const Hero = (props) => {
  return (
    <Box
      {...props}
      sx={{
        height: 500,
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
          width: ["150vw", "130vw", "100vw"],
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
        }}
      >
        <h1 sx={{ color: "white" }}>Hackinux </h1>
      </Flex>
    </Box>
  );
};

export default Hero;
