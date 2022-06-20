import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
export default function Layout({ pageTitle, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle ? pageTitle : "Walcome to Nextjs"}</title>
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </React.Fragment>
  );
}
