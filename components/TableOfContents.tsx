import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { HEADING_GROUPINGS, TEST_IDS } from "@/constants";
import { useMobile, useTheme } from "@/utils";
import styles from '@/styles/Home.module.css'

// Used tutorial from https://www.emgoto.com/react-table-of-contents/ and 
// https://reacthustle.com/blog/build-a-responsive-react-table-of-contents-component-with-daisyui#project-setup-using-nextjs
interface HeadingDataProps {
  text: string;
  level: number;
  id: string;
}

interface HeadingsListProps {
  headings: HeadingDataProps[];
  activeId: string;
  isMobile: boolean; 
  handleClick?: () => void
}

interface TableOfContentsMobileProps extends HeadingsListProps{
  activeHeading: string | null; 
  open: boolean;
}


interface HeadingsProps {
  headings: HeadingDataProps[];
  activeId: string;
  activeHeading: string | null;
}


interface TableOfContentsProps {
  headingDepth?: number;
}

const headingLevelSwitch = (headingType: string) => {
  switch (headingType) {
    case 'H3': { 
     return 1 
    }
    case 'H4': { 
      return 2
    }
    case 'H5': { 
      return 3
    }
    case 'H6': { 
      return 4 
    }
    default: {
      return 0
    }
  }
}

const HeadingsList = ({ headings, activeId, handleClick, isMobile }: HeadingsListProps) => 
  <ul className={`${styles.tableOfContentsList} ${isMobile && styles.tableOfContentsMobileList}`} data-testid={TEST_IDS.tocTestIds.list}>
    {headings.map((headingElement, index) => {
      const { id, level, text } = headingElement;
      const isActive = id === activeId

      return (
      <li key={index} className={id === activeId ? "active" : ""} style={{textDecoration: isActive ? 'underline': '', paddingLeft: `${level}rem` }}>
        <a
          href={`#${id}`}
          onClick={handleClick}
        >
          {text}
        </a>
      </li>
    )})}
  </ul>

const TableOfContentsMobile = ({ activeHeading, activeId, headings, handleClick, open }: TableOfContentsMobileProps) => {
  const {isDarkMode} = useTheme();

  return (
    <div data-testid={TEST_IDS.tocTestIds.dropdown} style={{background: isDarkMode ? '#eee': '#1e1e1e', color: isDarkMode ? 'black': 'white' }} className={styles.tableOfContentsMobileList} >
      { open ?
        <HeadingsList activeId={activeId} handleClick={handleClick} headings={headings} isMobile /> :
        <div onClick={handleClick} className={`${styles.tableOfContentsList}`} style={{gap: '5px'}}>
          {activeHeading}
        </div>
      }
    </div>
  )
}

/**
 * Component that creates an unordered list of the headings with a link to scroll to selected heading that will be highlighted as active
 */
const Headings = ({ headings, activeId, activeHeading }: HeadingsProps) => {
  const { isMobile } = useMobile(); 
  const { isDarkMode } = useTheme()
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true)
  }
  const ToCLabel =()=><div className={styles.tableOfContentsLabel} style={{ background: isDarkMode ? '#eee': '#1e1e1e', borderRadius: '5px 5px 0 0', color: isDarkMode ? 'black': 'white'}}>Table of Contents</div>

  const ToCLabelDesktop = () => 
  <div className={styles.tableOfContentsLabel}>Table of Contents</div>

  return (
    <>
      {isMobile ? <ToCLabel /> : <ToCLabelDesktop />}
      {isMobile ? <TableOfContentsMobile isMobile activeHeading={activeHeading} activeId={activeId} handleClick={handleClick} headings={headings} open={open} /> :
      <HeadingsList activeId={activeId} handleClick={handleClick} headings={headings} isMobile={false} />}
    </>
  )
}

/**
 * Dynamically generates the table of contents list, using any headings it can find in the main text based on headingDepth
 */
const getHeadingsData = (headingDepth: number) => {
  const [headings, setHeadings] = useState<HeadingDataProps[]>([]);

  useEffect(() => {
    // Find all heading elements that match the heading groupings starting with h2
    const headingElements: HTMLHeadingElement[] = Array.from(document.querySelectorAll(HEADING_GROUPINGS[headingDepth]))

    // Remap the headinglements to only the needed values of id, innerText, and nodeName
    // nodeName will be used to distinguish between h2, h3, etc and add padding to denote nested
    const mappedElements: HeadingDataProps[] = headingElements.map((heading)=> {
      const {id, innerText, nodeName} = heading
      const headingLevel = headingLevelSwitch(nodeName)
      return {id: id, text: innerText, level: headingLevel}
    })

    setHeadings(mappedElements);
  }, []);

  return { headings };
};

const useIntersectionObserver = (headingDepth: number, setActiveId: Dispatch<SetStateAction<string>>, setActiveHeading: Dispatch<SetStateAction<string | null>>) => {
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
        setActiveHeading(visibleHeadings[0].target.textContent)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: IntersectionObserverEntry, b: IntersectionObserverEntry) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
        setActiveHeading(sortedVisibleHeadings[0].target.textContent);
      }
    };

    const observer = new IntersectionObserver(callback, { rootMargin: "0px 0px -10% 0px" });

    const headingElements = Array.from(document.querySelectorAll(HEADING_GROUPINGS[headingDepth]));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer?.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
export const TableOfContents = ({ headingDepth = 0 }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');
  const [activeHeading, setActiveHeading] = useState<string | null>('');
  const { headings } = getHeadingsData(headingDepth);
  useIntersectionObserver(headingDepth, setActiveId, setActiveHeading);

  const scrollRef = useRef<HTMLDivElement>(null);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of Contents" data-testid={TEST_IDS.tocTestIds.tableOfContents} id="table-of-contents" className={styles.tableOfContents} ref={scrollRef}>
      <Headings headings={headings} activeId={activeId} activeHeading={activeHeading} />
    </nav>
  );
};
