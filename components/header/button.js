/**@jsxImportSource theme-ui*/

import { jsx, Box, Flex, Text } from "theme-ui";
import { ArrowLeft } from "react-feather";

export default ({ section }) => (
  <Flex
    as="a"
    href="../../"
    sx={{
      textDecorationLine: "none",
      alignItems: "center",
      position: "absolute",
      ml: [2, 3, 2, 5],
      cursor: "pointer",
      px: [2],
      py: [1],
      borderRadius: "100px",
      justifyContent: "space-around",
      ":hover": {
        border: "3px solid",
        borderColor: "red",
        transition: "0.1s",
      },
    }}
  >
    <ArrowLeft sx={{ color: "red" }} />
    <Text sx={{ pl: [1], color: "red" }}>back {section ? `to home` : ""}</Text>
  </Flex>
);
