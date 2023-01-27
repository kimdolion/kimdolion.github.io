import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { headingGroupings } from "@/constants";
  // Used tutorial from https://www.emgoto.com/react-table-of-contents/
  /**
   * This renders an item in the table of contents list.
   * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
   */

  interface HeadingsProps {
    headings: [{
      heading: HTMLHeadingElement
    }];
    activeId: string | undefined;
  }

  interface HeadingDataProps {
    heading: Element;
  }


interface TableOfContentsProps { 
  headingDepth?: number;
}

const HeadingsTSX = ({ headings, activeId }: HeadingsProps) => {
  return (
  <ul id="table-of-contents">
    {headings.map((headingElement) => {
      const { heading } = headingElement;
      const { id, innerText } = heading;
      return (
      <li key={id} className={id === activeId ? "active" : ""}>
        <a
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${id}`)?.scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          {innerText}
        </a>
      </li>
    )})}
  </ul>
)}

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = (headingDepth: number) => {
  const [headings, setHeadings] = useState<HeadingDataProps[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll(headingGroupings[headingDepth]))
    const mappedElements = headingElements.map((heading)=> {
      return { heading }
    })
    setHeadings(mappedElements);
  }, []);

  return { headings };
};

const useIntersectionObserver = (headingDepth: number, setActiveId: Dispatch<SetStateAction<any>>) => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        // console.log("what is map? map? ", map)
        return map;
      }, headingElementsRef.current);
      // console.log('headingElementsRef: ', headingElementsRef)
      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, { rootMargin: "0px 0px -10% 0px" });
    // console.log('observer: ', observer)
    const headingElements = Array.from(document.querySelectorAll(headingGroupings[headingDepth]));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
export const TableOfContents = ({ headingDepth = 0 }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');
  const { headings } = useHeadingsData(headingDepth);

  useIntersectionObserver(headingDepth, setActiveId);

  return (
    <nav aria-label="Table of contents">
      <HeadingsTSX headings={headings} activeId={activeId} />
    </nav>
  );
};
