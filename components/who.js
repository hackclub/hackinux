/**@jsxImportSource theme-ui*/

import { Box, Button, Container } from "theme-ui";

const Who = ({ ...props }) => {
  return (
    <Container sx={{ variant: "cont", textAlign: "center" }}>
      <h2 sx={{ variant: "subt" }}>who is eligible to participate?</h2>
      <h1 sx={{ variant: "heading" }}>
        Everyone! <span sx={{ color: "blue", variant: "wavy" }}> </span>{" "}
      </h1>
      <p sx={{ variant: "para" }}>
        Any hacker who is in High School/University is eligible for this
        competition! So if you have the hacker spirit and want to compete with
        other hackers in your region, then what are you waiting for!{" "}
      </p>
      <Button as="a" href="./faq" sx={{ variant: "buttons.cta" }}>
        FAQs
      </Button>
    </Container>
  );
};

export default Who;
