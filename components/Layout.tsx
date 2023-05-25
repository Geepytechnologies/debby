import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TheHead from "./TheHead";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <TheHead />
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
