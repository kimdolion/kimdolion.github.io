import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { headingGroupings } from "@/constants";
  // Used tutorial from https://www.emgoto.com/react-table-of-contents/
  /**
   * This renders an item in the table of contents list.
   * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
   */

  interface headingsProps {
  headings: HTMLHeadingElement[];
    activeId: string | undefined;
    id?: string;
    title?: string;
    items?: {id:string, title: string}[]
  }

interface TableOfContentsProps { 
  headingDepth?: number;
}

  const Headings = ({ headings, activeId }: headingsProps) => {
    console.log('activeid?: ', activeId);
    console.log('headings in Headings?: ', headings)
    if (headings) {
      return (
        <ul id="table-of-contents">
          {headings.map((heading: HTMLHeadingElement) => {
            return (
              <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
                <Link
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  {heading.title}
                </Link>
            </li>
          )})}
        </ul>
      );
    } else {
      return null;
    }
  }
  
  /**
   * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
   */
  const useHeadingsData = (headingDepth: number) => {
    const [nestedHeadings, setNestedHeadings] = useState([]);
  
    useEffect(() => {
      const headingElements: [] = Array.from(
        document.querySelectorAll("main h2, main h3")
      );
      // Created a list of headings, with H3s nested
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);
    console.log("nestedHeadings? ", nestedHeadings)
    return { nestedHeadings };
  };
  
  const getNestedHeadings = (headingElements: HTMLHeadingElement[]) => {
    const nestedHeadings: headingsProps[] = [];
  
    headingElements.forEach((heading) => {
      const { innerText: title, id } = heading;
      console.log("heading nodenames: ", heading.nodeName)
      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title
        });
      }
    });
  
    return nestedHeadings;
  };
  
  const useIntersectionObserver = (headingDepth: number, setActiveId: Dispatch<SetStateAction<any>>) => {
    const headingElementsRef = useRef({});

    useEffect(() => {
      const callback = (headings: HTMLHeadingElement[]) => {
        headingElementsRef.current = headings.reduce((map, headingElement: HTMLHeadingElement) => {
          map[headingElement.target.id] = headingElement;
          console.log("what is map? map? ", map)
          return map;
        }, headingElementsRef.current);
        console.log('headingElementsRef: ', headingElementsRef)
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
  
      const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "500px" });
      console.log('observer: ', observer)
      const headingElements = Array.from(document.querySelectorAll(headingGroupings[headingDepth]));
  
      headingElements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, [setActiveId]);
  };
  
  /**
   * Renders the table of contents.
   */
  export const TableOfContents = ({ headingDepth }: TableOfContentsProps) => {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData(headingDepth);
    useIntersectionObserver(headingDepth, setActiveId);
  
    return (
      <nav aria-label="Table of contents" style={{position: "sticky", top: 0}}>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };
