import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { headingGroupings } from "@/constants";
import Select, { SingleValue, StylesConfig } from 'react-select'
import { useMobile, useTheme } from "@/utils";
import styles from '@/styles/Home.module.css'

// Used tutorial from https://www.emgoto.com/react-table-of-contents/

interface HeadingsDropdownProps {
  headings: HeadingDataProps[];
}

interface HeadingsListProps {
  headings: HeadingDataProps[];
  activeId: string;
}

interface HeadingDataProps {
  heading: HTMLHeadingElement;
}

interface TableOfContentsProps {
  headingDepth?: number;
}

interface Option {
  label: string, value: string, id: string;
 }

/**
 * React-Select dropdown component that renders the headings as a dropdown for mobile
 * // https://react-select.com/home
 */
const HeadingsDropdown = ({ headings }: HeadingsDropdownProps) => {
  const { isDarkMode } = useTheme()
  
  const options: Option[] = headings.map((headingDetail) => {
    const { heading: { id, innerText } } = headingDetail
    return { id, label: innerText, value: id }
  })

  const handleSelect = (newValue: SingleValue<Option>) => {
    if (newValue) {
      const headingElement = document.getElementById(newValue?.value)
      headingElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const tocStyles: StylesConfig<Option, false> = {
    control: (styles, {menuIsOpen}) => {return {
      ...styles,
      backgroundColor: isDarkMode ? 'white' : '#1e1e1e',
      borderRadius: menuIsOpen ? '5px 5px 0px 0px' : 5,
      color: isDarkMode ? 'black' : 'white',
      fontWeight: 700,
      marginTop: '1rem',
      opacity: 0.9,
      padding: '0.5rem',
    }},
    menu: () => ({
      background: isDarkMode ? 'white' : '#1e1e1e',
      borderRadius: '0px 0px 5px 5px',
      color: 'white',
      fontWeight: 400,
      transition: '0.5s ease-in',
    }),
    option: () => {
      return {
        color: isDarkMode ? 'black' : 'white',
        ':hover': {
          background: '#6e0202',
          color: 'white',
          fontWeight: 600
        },
        padding: '0.5rem',
      };
    },
  };

  return (
    <Select
      aria-label="Table of Contents"
      defaultValue={options[0]}
      onChange={handleSelect}
      options={options}
      styles={tocStyles}
      unstyled
    />
  )
}

/**
 * Component that creates an unordered list of the headings with a link to scroll to selected heading that will be highlighted as active
 */
const HeadingsList = ({ headings, activeId }: HeadingsListProps) => {
  const { isMobile } = useMobile()

  return (
    <div className={styles.tableOfContents}>
      {isMobile ? <HeadingsDropdown headings={headings} />  :
      <ul className={styles.tableOfContentsList}>
      {headings.map((headingElement, index) => {
        const { heading: { id, innerText } } = headingElement;
        const isActive = id === activeId

        return (
        <li key={index} className={id === activeId ? "active" : ""} style={{textDecoration: isActive ? 'underline': '' }}>
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
    }
  </div>
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
    <nav aria-label="Table of contents" id="table-of-contents" className={styles.tableOfContents}>
      <HeadingsList headings={headings} activeId={activeId} />
    </nav>
  );
};
