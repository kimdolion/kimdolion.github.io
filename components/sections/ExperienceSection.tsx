import { ReactNode } from "react";
import Link from "next/link";
import { WORK_EXPERIENCES } from "@/constants";
import { Divider } from "../Divider";
import styles from "@/styles/Home.module.css";

import { InlineHeading, InlineHeadingProps } from "../InlineHeading";
import { Section } from "./Section";

export interface ExperienceProps {
  extraInfo?: boolean;
}

export interface ExperienceDetailsProps {
  headingProps: InlineHeadingProps;
  company: string;
  location: string;
  responsibilities: string[];
  extraDetails: ReactNode;
}

export const ExperienceDetails = ({
  experienceWork = WORK_EXPERIENCES[0],
  extraInfo = false,
}: {
  experienceWork: ExperienceDetailsProps;
  extraInfo: boolean;
}) => {
  const { company, headingProps, location, responsibilities, extraDetails } =
    experienceWork;

  return (
    <div>
      <InlineHeading {...headingProps} heading={extraInfo ? "h2" : "h3"} />
      <div>
        {company} in {location}
      </div>
      <ul>
        {responsibilities.map((responsibility: string, index: number) => (
          <li key={"responsibility-" + index} style={{ margin: "1em 0" }}>
            {responsibility}
          </li>
        ))}
      </ul>
      {extraInfo && extraDetails ? (
        <div style={{ padding: "2rem 0" }}>{extraDetails}</div>
      ) : null}
      <Divider />
    </div>
  );
};

export const ExperienceSection = ({
  extraInfo = false,
}: ExperienceProps): JSX.Element => {
  const title = extraInfo ? "Work Experience" : "Recent Work Experience";
  return (
    <Section>
      <Link href="/experience" className={styles.styledLink}>
        <h2 id="experience-section">{title}</h2>
      </Link>
      {extraInfo ? (
        WORK_EXPERIENCES.map(
          (experience: ExperienceDetailsProps, index: number) => (
            <ExperienceDetails
              key={experience.company + index}
              experienceWork={experience}
              extraInfo={extraInfo}
            />
          ),
        )
      ) : (
        <ExperienceDetails
          experienceWork={WORK_EXPERIENCES[0]}
          extraInfo={extraInfo}
        />
      )}
    </Section>
  );
};
