import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import { getRandomFromArray } from "@/utils";
import { RANDOM_FACTS } from "@/constants";
import profilePhoto from "/public/profile.jpg";
import { Section } from "./Section";
import { StyledLink } from "../StyledLink";
import { ImageOverlay } from "../ImageOverlay";
import korAmFlag from "/public/kor_am_flag.jpg";
import { useState } from "react";

export interface AboutProps {
  extraInfo?: boolean;
}

export const AboutSection = ({
  extraInfo = false,
}: AboutProps): JSX.Element => {
  const [randomFact, setRandomFact] = useState(RANDOM_FACTS[0]);
  const currentlyLooking = true;

  const handleClick = () => {
    setRandomFact(getRandomFromArray(RANDOM_FACTS));
  };

  return (
    <Section>
      <div className={styles.profilePhoto}>
        <ImageOverlay
          image={{
            src: profilePhoto,
            alt: "Profile photo of Kimberly Wilkes.",
          }}
          priority
        >
          Hello!
        </ImageOverlay>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/about" title="Learn more" className={styles.styledLink}>
          <h2 id="about-section">About Me</h2>
        </Link>
      </div>
      <div>
        <p>
          I'm a software engineer, former educator, and hobby cosplayer; in
          short a lifetime learner and problem solver, with a passion for
          user-centered and responsive web design.
        </p>
        <p>
          Software engineering and cosplay both require a lot of research,
          flexibility, and trial and error to ensure a good end result. I love
          being able to identify and fix a problem or at least provide guidance
          towards a solution.
        </p>
        <p>
          I've worked with many different industries and technologies though I
          find myself most at home with the frontend in React (Typescript).
        </p>
        {currentlyLooking && (
          <p>
            Currently looking for my next opportunity as a software engineer!
            Let's connect on{" "}
            <StyledLink
              href="https://linkedin.com/in/kimberly-wilkes"
              name="Linkedin"
            ></StyledLink>
            .
          </p>
        )}
      </div>
      <div className={styles.randomFlagButtonContainer}>
        <button
          onClick={handleClick}
          className={styles.randomFlagButton}
          title="Random Fact Button"
        >
          <Image
            src={korAmFlag}
            height={100}
            width={100}
            alt="Korean and US flag merged by Onjena Yo of Carbon-Fibre Media."
            style={{ borderRadius: 100 }}
          />
        </button>
        {extraInfo ? (
          <div>
            Random Fact:<p>{randomFact}</p>
          </div>
        ) : (
          <p>
            Learn even more about me, my work history, education, and projects
            on their respective pages.
          </p>
        )}
      </div>
    </Section>
  );
};
