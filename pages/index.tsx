import Head from "next/head";
import { Page } from "@/components/Page";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TableOfContents } from "@/components/TableOfContents";
import { Divider } from "@/components/Divider";
import React from "react";

export default function Home() {
  const title = "Kimberly Wilkes' Software Engineer Portfolio";
  const content =
    "A portfolio summary of Kimberly Wilkes, a software engineer and former educator. Includes details about software engineering career focus, work experience, projects, and education.";
  const keywords = "Software Engineer, Frontend Developer, Portfolio, Resume";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="description" content={content} />
        <meta property="og:keywords" content={keywords} />
        <meta property="keywords" content={keywords} />
      </Head>

      <Page>
        <TableOfContents />
        <div style={{ margin: "2rem 0" }}>
          <h2 style={{ fontSize: "2em", textAlign: "center" }}>
            Software Engineer
          </h2>
          <AboutSection />
          <div style={{ margin: "2rem 0" }}>
            <Divider />
          </div>
          <ExperienceSection />
          <ProjectsSection />
          <div style={{ margin: "2rem 0" }}>
            <Divider />
          </div>
          <EducationSection />
        </div>
      </Page>
    </div>
  );
}
