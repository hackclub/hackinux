/**@jsxImportSource theme-ui*/

import { Flex, Box } from "theme-ui";
import styled from "@emotion/styled";
import Icon from "@hackclub/icons";
import { useState } from "react";
import ScrollLock from "react-scrolllock";
import { withResizeDetector } from "react-resize-detector";
import Bounce from "react-reveal/Bounce";
import Button from "./button";

import headerTransparencyUtility from "./utilities/index";
import resizeHandlerUtility from "./utilities/index";

import * as _ from "ramda";

export default withResizeDetector(
  ({ width, shouldBeTransparent, isHomePage = true, section = "" }) => {
    const [scroll, setscroll] = useState(false);
    const [isVisible, setvisibility] = useState(true);
    const [transparent, setTransparency] = useState(true);

    resizeHandlerUtility(
      () => {
        setscroll(false);
      },
      width,
      scroll,
      767
    );

    headerTransparencyUtility((currentPosition) => {
      if (currentPosition > 104) {
        setTransparency(false);
      }
      if (currentPosition < 104) {
        setTransparency(true);
      }
    });

    return (
      <Box
        as="header"
        columns={[2, 2, 3, 3]}
        sx={{
          width: "100%",
          background: shouldBeTransparent
            ? transparent
              ? "transparent"
              : "white"
            : "white",
          display: "fixed",
          zIndex: 5000,
          minHeight: "60px",
          opacity: "0.97",
          position: "fixed",
          borderBottom: shouldBeTransparent
            ? transparent
              ? "none"
              : "1px solid rgba(48, 48, 48, 0.125)"
            : "1px solid rgba(48, 48, 48, 0.125)",
        }}
      >
        <ScrollLock isActive={scroll} />
        <Overlay display={scroll} />
        <Flex
          sx={{
            width: "100%",
            alignItems: !isHomePage ? "center" : null,
          }}
        >
          {isHomePage ? (
            <a href="../../../../">
              <img
                src="https://raw.githubusercontent.com/hackclub/india-site/master/public/hackclubflag.png"
                sx={{
                  width: ["100px", "110px", "100px"], // ['100px', '110px', '120px'],
                  position: "absolute",
                  ml: [2, 3, 2, 5],
                  bottom: [1],
                }}
              />
            </a>
          ) : (
            <Button section={section} />
          )}
          <Flex
            as="nav"
            sx={{
              flex: 1,
              alignItems: "center",
              flexDirection: ["row-reverse", "row-reverse", "row"],
              justifyContent: ["initial", "initial", "center"],
              a: {
                fontSize: "18px", //'20px',
                display: ["none", "none", "initial"],
                mx: 3,
                color: shouldBeTransparent
                  ? transparent
                    ? "white"
                    : "black"
                  : "black",
                cursor: "pointer",
                fontWeight: "normal",
                textDecorationLine: "none",
              },
            }}
          >
            <Nav data={data} isHomePage={isHomePage} />
            <span
              onClick={() => {
                setscroll(!scroll);
                !shouldBeTransparent ? setvisibility(!isVisible) : null;
              }}
              sx={{ position: "absolute", zIndex: 2000 }}
            >
              <Icon
                sx={{
                  mr: [3],
                  display: shouldBeTransparent
                    ? [
                        scroll ? "none" : "initial",
                        scroll ? "none" : "initial",
                        "none",
                      ]
                    : isVisible
                    ? ["initial", "initial", "none"]
                    : "none",
                  fill: shouldBeTransparent
                    ? isHomePage
                      ? transparent
                        ? "white"
                        : "#3c4858"
                      : "#3c4858"
                    : "#3c4858",
                }}
                glyph="menu"
                size={["40px"]}
              />
              <Icon
                sx={{
                  mr: [3],

                  display: shouldBeTransparent
                    ? [
                        !scroll ? "none" : "initial",
                        !scroll ? "none" : "initial",
                        "none",
                      ]
                    : !isVisible
                    ? ["initial", "initial", "none"]
                    : "none",
                }}
                size={["40px"]}
                glyph="view-close"
              />
            </span>
          </Flex>
        </Flex>
      </Box>
    );
  }
);

const Customh3 = styled.h3``;
const Nav = ({ data, isHomePage }) => (
  <>
    {_.map(
      (ele) => (
        <Customh3 as="a" href={ele.url ? ele.url : "#"}>
          <span>{ele.text}</span>
        </Customh3>
      ),
      data
    )}
  </>
);

const data = [
  { text: "Home", url: "../../../" },
  { text: "Faqs", url: "./faq" },
  { text: "Slack", url: "https://hackclub.com/slack" },
];

const Overlay = ({ display }) => (
  <div
    sx={{
      position: "absolute",
      height: "100vh",
      width: "100vw",
      bg: "white",
      opacity: "0.99",
      display: display ? "flex" : "none",
      pt: "90px",
      flexDirection: "column",
    }}
  >
    <OverlayItem Text={"Home"} url="../../" />
    <OverlayItem Text={"Faqs"} url="./faq" />
    <OverlayItem Text={"Slack"} url="https://hackclub.com/slack" />
  </div>
);

const OverlayItem = ({ Text, url }) => (
  <div sx={{ ml: 4, my: 0 }}>
    <p
      sx={{
        fontSize: 2,
        my: 2,
        width: "80%",
        borderBottom: "1px solid",
        borderColor: "smoke",
        pb: 3,
        pl: 3,
      }}
    >
      <Bounce top>
        <b
          sx={{ fontWeight: "regular", ":hover": { cursor: "pointer" } }}
          onClick={() => Open(url)}
        >
          {Text}
        </b>
      </Bounce>
    </p>
  </div>
);

const Open = (url) => {
  window.open(url, "_self");
};
