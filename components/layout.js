/**@jsxImportSource theme-ui*/

import Header from "./header/index";
import Footer from "./footer/index";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header shouldBeTransparent />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
