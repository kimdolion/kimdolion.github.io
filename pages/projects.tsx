import Head from "next/head";
import { Page } from "@/components/Page";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TableOfContents } from "@/components/TableOfContents";

export default function Projects() {
  const title = "Projects and Technology";
  const content =
    "Kimberly Wilkes Software Engineer portfolio: projects and technology skills as a frontend engineer.";
  const keywords =
    "React, React Native, TypeScript, JavaScript, NextJS, portfolio, coding projects, frontend, backend, software engineering projects, software engineer portfolio,";
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
        <TableOfContents headingDepth={1} />
        <ProjectsSection extraInfo />
      </Page>
    </div>
  );
}
