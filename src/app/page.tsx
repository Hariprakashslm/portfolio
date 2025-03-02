"use client";
import About from "../../components/about";
import Experinace from "../../components/experiance";
import Education from "../../components/education";
import Header from "../../components/header";
import Home from "../../components/home";
import Skills from "../../components/skills";
import data from "../../data/index";
export default function HomePage() {
  const headerData = data.headerData;
  return (
    <>
      <Header data={headerData} />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experinace />
    </>
  );
}
