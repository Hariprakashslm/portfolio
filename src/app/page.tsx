"use client";
import About from "../../components/about";
import Experinace from "../../components/experiance";
import Education from "../../components/education";
import Header from "../../components/header";
import Home from "../../components/home";
import Skills from "../../components/skills";
import data from "../../data/index";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import React, { RefObject, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { createClient } from "../../lib/prismic";

const ScrollToTopDiv = styled.div`
  border: solid #00628c 1px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  transform: rotate(-90deg);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export default function HomePage() {
  const headerData = data.headerData;

  const sectionRefs: RefObject<HTMLDivElement>[] = headerData.menu.map(() =>
    React.createRef<HTMLDivElement>()
  ) as RefObject<HTMLDivElement>[];
  const [data1, setData] = useState<any>();

  useEffect(() => {
    const client = createClient();
    client.getAllByType("home_page").then((data) => setData(data));
  }, []);
  const scrollToTopFn = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    data1 && (
      <>
        <Header
          data={data1[0].data}
          headerData={headerData}
          sectionRefs={sectionRefs}
        />
        <Home sectionRef={sectionRefs[0]} />
        <About data={data1[0].data} sectionRef={sectionRefs[1]} />
        <Skills data={data1[0].data} sectionRef={sectionRefs[2]} />
        <Education sectionRef={sectionRefs[3]} />
        <Experinace sectionRef={sectionRefs[4]} />
        <Projects sectionRef={sectionRefs[5]} />
        <Contact sectionRef={sectionRefs[6]} />
        <ScrollToTopDiv onClick={scrollToTopFn}>
          <svg
            fill="#00628C"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_27_"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>
        </ScrollToTopDiv>
      </>
    )
  );
}
