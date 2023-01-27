import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { headingGroupings } from "@/constants";
  // Used tutorial from https://www.emgoto.com/react-table-of-contents/
  /**
   * This renders an item in the table of contents list.
   * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
   */

  interface HeadingsTSXProps {
    headings: HeadingDataProps[];
    activeId: string | undefined;
  }

  interface HeadingDataProps {
    heading: HTMLHeadingElement;
  }


interface TableOfContentsProps { 
  headingDepth?: number;
}

/**
 * Component that creates an unordered list of the headings with a link to scroll to selected heading that will be highlighted as active
 */
const HeadingsTSX = ({ headings, activeId }: HeadingsTSXProps) => {
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
 * Dynamically generates the table of contents list, using any headings it can find in the main text based on headingDepth
 */
const useHeadingsData = (headingDepth: number) => {
  const [headings, setHeadings] = useState<{heading: HTMLHeadingElement}[]>([]);

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(document.querySelectorAll(headingGroupings[headingDepth]))

    const mappedElements = headingElements.map((heading)=> {
      return { heading }
    })

    setHeadings(mappedElements);
  }, []);

  return { headings };
};

const useIntersectionObserver = (headingDepth: number, setActiveId: Dispatch<SetStateAction<string>>) => {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map: Record<string, IntersectionObserverEntry>, headingElement: IntersectionObserverEntry) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key: string) => {
        const headingElement: any = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: IntersectionObserverEntry, b: IntersectionObserverEntry) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, { rootMargin: "0px 0px -10% 0px" });

    const headingElements = Array.from(document.querySelectorAll(headingGroupings[headingDepth]));
    
    headingElements.forEach((element) => observer.observe(element));
    
    return () => observer?.disconnect();
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
