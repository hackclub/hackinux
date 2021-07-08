/**@jsxImportSource theme-ui*/

import { Box, Container } from "theme-ui";

const Who = ({ ...props }) => {
  return (
    <Container sx={{ variant: "cont", textAlign: "center" }}>
      <h2 sx={{ variant: "subt" }}>who is eligible to participate?</h2>
      <h1 sx={{ variant: "heading" }}>
        Anyone from{" "}
        <span sx={{ color: "blue", variant: "wavy" }}> Asia or Africa! </span>{" "}
      </h1>
      <p sx={{ variant: "para" }}>
        Any hacker who lives in Asia or Africa is eligible for this competition!
        So if you have the hacker spirit and want to compete with other hackers
        in your region, then what are you waiting for!{" "}
      </p>
    </Container>
  );
};

export default Who;
