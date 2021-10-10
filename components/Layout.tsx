import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
