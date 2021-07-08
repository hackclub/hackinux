/**@jsxImportSource theme-ui*/

import { Container, Box, Heading, BaseStyles } from "theme-ui";
import { Layout } from "../components/index";
import Faq_Mdx from "../components/faq.mdx";

const Faq = () => {
  return (
    <Layout shouldBeTransparent={false}>
      <Box
        as="header"
        sx={{
          bg: "sheet",
          color: "text",
          pt: [5, null, null, null, 6],
          pb: [3, 4, 5, null, 6],
          textAlign: "center",
        }}
      >
        <Container variant="copy">
          <Heading
            as="h1"
            variant="title"
            sx={{ color: "primary", mt: [2, 4] }}
          >
            FAQ ( Frequently Asked Questions )
          </Heading>
          <Heading as="h2" variant="subtitle" sx={{ mt: 3, color: "text" }}>
            Some of the most asked questions about Hackinux
          </Heading>
        </Container>
      </Box>
      <Container
        variant="main"
        sx={{
          py: [3, 4],
          px: 3,
          maxWidth: [null, "copyUltra"],
          h2: { variant: "text.headline" },
        }}
      >
        <Box
          as={BaseStyles}
          sx={{
            mx: 0,
            fontSize: 2,
            "> p": { maxWidth: "copy" },
            h2: { variant: "text.headline", mt: 4 },
          }}
        >
          <Faq_Mdx />
        </Box>
      </Container>
    </Layout>
  );
};

export default Faq;
