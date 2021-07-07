/**@jsxImportSource theme-ui*/

import { Box, Container } from "theme-ui";

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
      <h1 sx={{ fontSize: [4, 5], mt: [0] }}>
        Make the <span sx={{}}>coolest linux</span> desktop
      </h1>
    </Container>
  );
};

export default About;
