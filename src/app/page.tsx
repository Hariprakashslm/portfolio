"use client";
import About from "../../components/about";
import Experience from "../../components/experiance";
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
  border: 2px solid var(--primary);
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  z-index: 1000;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: var(--shadow-xl);
    border-color: var(--secondary);
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  }
  
  &:active {
    transform: translateY(-1px) scale(1.05);
  }
  
  @media (max-width: 768px) {
    right: 1rem;
    bottom: 1rem;
    padding: 0.75rem;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  color: var(--primary);
`;

export default function HomePage() {
  const headerData = data.headerData;
 
  const sectionRefs: RefObject<HTMLDivElement>[] = headerData.menu.map(() =>
    React.createRef<HTMLDivElement>()
  ) as RefObject<HTMLDivElement>[];
  
  const [data1, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const client = createClient();
        const result = await client.getAllByType("home_page");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const scrollToTopFn = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <LoadingSpinner>
        Loading Portfolio...
      </LoadingSpinner>
    );
  }

  // Show error state if data fetching failed
  if (hasError || !data1) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1>Something went wrong</h1>
        <p>Unable to load portfolio data. Please try refreshing the page.</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Refresh Page
        </button>
      </div>
    );
  }
  console.log({data})
  return (
    <>
      <Header
        data={data1[0].data}
        headerData={headerData}
        sectionRefs={sectionRefs}
      />
       <Home sectionRef={sectionRefs[0]} data={data1[0].data}  /> 
      <About data={data1[0].data} sectionRef={sectionRefs[1]} />
       <Skills data={data1[0].data} sectionRef={sectionRefs[2]} />
      <Education sectionRef={sectionRefs[3]} data={data1[0].data} />
      <Experience data={data1[0].data} sectionRef={sectionRefs[4]} />
      <Projects sectionRef={sectionRefs[5]} data={data1[0].data} />
      <Contact data={data1[0].data} sectionRef={sectionRefs[6]} />
      <ScrollToTopDiv onClick={scrollToTopFn}>
        <svg
          fill="white"
          height="24px"
          width="24px"
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
  );
}
