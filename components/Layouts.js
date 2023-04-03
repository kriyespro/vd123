import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import TopNav from "./TopNav";
import Banner from "./Banner";
import Latest from "./Latest";
import Featured from "./Featured";

export default function Layouts({ children }) {
  return (
    <>
      <TopNav />
      <Header />
      <Banner />
      <Featured />
      <Latest />
    
      <main>{children}</main>
      <Footer />
    </>
  );
}
