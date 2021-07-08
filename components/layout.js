/**@jsxImportSource theme-ui*/

import Header from "./header/index";
import Footer from "./footer/index";

const Layout = ({ shouldBeTransparent = true, children, ...props }) => {
  return (
    <>
      <Header shouldBeTransparent={shouldBeTransparent} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
