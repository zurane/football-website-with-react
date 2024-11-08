import React from "react";
import Header from "../components/Header";
import News from "../components/News";
import OtherNews from "../components/OtherNews";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <>
      <Header />

      <News />
      <OtherNews />
      <Videos />
    </>
  );
}
