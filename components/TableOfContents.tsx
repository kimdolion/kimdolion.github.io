import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { headingGroupings } from "@/constants";
import Select, { ActionMeta } from 'react-select'

// Used tutorial from https://www.emgoto.com/react-table-of-contents/

  interface HeadingsTSXProps {
    headings: HeadingDataProps[];
    activeId: string;
  }

  interface HeadingDataProps {
    heading: HTMLHeadingElement;
  }

interface TableOfContentsProps { 
  headingDepth?: number;
}

type Option = {label: string, value: string, id: string}

// https://react-select.com/home
const HeadingsDropdown = ({headings, activeId}: HeadingsTSXProps) => {
  const options = headings.map((headingDetail) => {
    const { heading } = headingDetail
    const { id, innerText } = heading;
    return { id, value: id, label: innerText }
  })

  const handleSelect = (option: Option) => {
    document.querySelector(`#${option.id}`)?.scrollIntoView({
      behavior: "smooth"
    });
    console.log('handle select selected: ', option.id)
  }

  return (
    <Select id="table-of-contents" defaultValue={options[0]} options={options} onChange={handleSelect} />
  )
}

/**
 * Component that creates an unordered list of the headings with a link to scroll to selected heading that will be highlighted as active
 */
const HeadingsTSX = ({ headings, activeId }: HeadingsTSXProps) => {
  const [width, setWidth] = useState(1200)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth)
        width <= 768 ? setIsMobile(true) : setIsMobile(false)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
}, [width])

  return (isMobile ? <HeadingsDropdown headings={headings} activeId={activeId} />  :
    <ul id="table-of-contents">
    {headings.map((headingElement) => {
      const { heading: { id, innerText } } = headingElement;

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
  )
}

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
