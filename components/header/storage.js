/**@jsxImportSource theme-ui*/

import { useState, useEffect } from "react";
//import styled from '@emotion/styled'
import ScrollLock from "react-scrolllock";
import { withResizeDetector } from "react-resize-detector";

import headerTransparencyUtility from "./utilities/index";

export default withResizeDetector(({ width }) => {
  const [scroll, setscroll] = useState(false);
  const [transparent, setTransparency] = useState(true);

  if (width > 767) {
    if (scroll) setscroll(false);
  }

  headerTransparencyUtility((currentPosition) => {
    if (currentPosition > 104) {
      setTransparency(false);
    }
    if (currentPosition < 104) {
      setTransparency(true);
    }
  });

  const Menu = ({ scrollLock, transparency }) => (
    <span
      onClick={() => {
        setscroll(!scroll);
      }}
    >
      <svg
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="menu"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        width="42"
        height="42"
        sx={{
          color: scrollLock ? "initial" : transparency ? "white" : "initial",
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <g>
          <path d="M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
          <path d="M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
          <path d="M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
        </g>
      </svg>
    </span>
  );

  return (
    <>
      <ScrollLock isActive={scroll} />
      <Overlay
        display={scroll}
        callback={() => setscroll((prevState) => !prevState)}
      />
      <div
        sx={{
          width: "100%",
          position: "fixed",
          zIndex: 1000,
          backgroundColor: transparent ? "transparent" : "white",
          opacity: "0.97",
          borderBottom: transparent ? 0 : "1px solid rgba(48, 48, 48, 0.125)",
          minHeight: "60px",
        }}
      >
        <img
          sx={{
            width: ["100px", "120px"],
            ml: [3, 4, 4, 5],
            position: "absolute",
          }}
          src="https://raw.githubusercontent.com/hackclub/india-site/master/public/hackclubflag.png"
        />
        <div
          sx={{
            display: ["flex"],
            flexDirection: ["row-reverse", "row-reverse", "row"],
            justifyContent: [null, null, "center"],
          }}
        >
          <div
            sx={{
              display: ["flex", "flex", "none"],
              flexDirection: "column",
              justifyContent: "center",
              height: "60px",
              mr: 3,
            }}
          >
            <Menu transparency={transparent} scrollLock={scroll} />
          </div>

          <Link Text="Home" url="./" isTransparent={transparent} />
          <Link
            Text="Blog"
            url="https://alexa.hackclub.com/"
            isTransparent={transparent}
          />
          <Link
            Text="Join"
            url="https://apply.hackclub.com/"
            isTransparent={transparent}
          />
          <Link Text="Team" url="./team" isTransparent={transparent} />
        </div>
      </div>
    </>
  );
});

const Link = ({ Text, url, isTransparent }) => (
  <p sx={{ mx: 3, fontSize: 2, display: ["none", "none", "initial"] }}>
    <span
      sx={{
        cursor: "pointer",
        color: isTransparent ? "white" : "mute",
      }}
      onClick={() => Open(url)}
    >
      {Text}
    </span>
  </p>
);

const Overlay = ({ display, callback }) => (
  <div
    sx={{
      //    position: 'absolute',
      height: "100vh",
      width: "100vw",
      bg: "white",
      opacity: "0.99",
      display: display ? "flex" : "none",
      pt: "90px",
      flexDirection: "column",
      zIndex: 2000,
    }}
  >
    <OverlayItem Text={"Home"} url="./" />
    <OverlayItem Text={"Alexa-Challenge"} url="https://alexa.hackclub.com/" />
    <OverlayItem Text={"Join"} url="https://apply.hackclub.com/" />
    <OverlayItem Text={"Team"} url="./team" />
  </div>
);

const OverlayItem = ({ Text, url }) => (
  <div sx={{ ml: 4, my: 0 }}>
    <p
      sx={{
        fontSize: 3,
        my: 2,
        width: "80%",
        borderBottom: "1px solid",
        borderColor: "smoke",
        pb: 3,
        pl: 3,
      }}
    >
      <b
        sx={{ fontWeight: "regular", ":hover": { cursor: "pointer" } }}
        onClick={() => Open(url)}
      >
        {" "}
        {Text}
      </b>
    </p>
  </div>
);

const Open = (url) => {
  window.open(url, "_self");
};

const Close = ({ callback }) => (
  <div sx={{ textAlign: "end", pr: [3], pt: [3] }}>
    <svg
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="view-close"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width="32"
      height="32"
      sx={{ cursor: "pointer" }}
      onClick={() => {
        callback();
      }}
    >
      <g>
        <path d="M11.121,9.707c-0.39,-0.391 -1.024,-0.391 -1.414,0c-0.391,0.39 -0.391,1.024 0,1.414l4.95,4.95l-4.95,4.95c-0.391,0.39 -0.391,1.023 0,1.414c0.39,0.39 1.024,0.39 1.414,0l4.95,-4.95l4.95,4.95c0.39,0.39 1.023,0.39 1.414,0c0.39,-0.391 0.39,-1.024 0,-1.414l-4.95,-4.95l4.95,-4.95c0.39,-0.39 0.39,-1.024 0,-1.414c-0.391,-0.391 -1.024,-0.391 -1.414,0l-4.95,4.95l-4.95,-4.95Z"></path>
      </g>
    </svg>
  </div>
);
