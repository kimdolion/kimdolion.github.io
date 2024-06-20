import Head from "next/head";
import { Page } from "@/components/Page";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TableOfContents } from "@/components/TableOfContents";

export default function Experience() {
  const title = "Kimberly Wilkes' Work Experience";
  const content =
    "Kimberly Wilkes' work experiences as a career changer from teacher to frontend and responsive design focused software engineer.";
  const keywords =
    "Work experience, Software Engineer, Frontend Developer, Portfolio, Resume, Software Engineer portfolio";
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
        <TableOfContents headingDepth={4} />
        <ExperienceSection extraInfo />
      </Page>
    </div>
  );
}
