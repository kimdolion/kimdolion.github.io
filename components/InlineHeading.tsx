import Link from "next/link";

export interface InlineHeadingProps {
    className?: string;
    endMonth?: string;
    endYear: number | string;
    heading?: string;
    id: string;
    includeURL?: boolean; 
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
    url?: string;
}

interface HeadingToUseProps {
    headingType?: string
}


export const InlineHeading = ({...props}: InlineHeadingProps) => {
    const {className, endMonth, endYear, heading, id, includeURL, mainHeadingText, startMonth, startYear } = props;

    const HeadingToUse = ({headingType}: HeadingToUseProps ) => {
        switch (headingType) {
            case 'h2': {
                return <h2 id={id}>{mainHeadingText}</h2>
            }
            case 'h3': {
                return <h3 id={id}>{mainHeadingText}</h3>
            }
            case 'h4': {
                return <h4 id={id}>{mainHeadingText}</h4>
            }
            case 'h5': {
                return <h5 id={id}>{mainHeadingText}</h5>
            }
            case 'h6': {
                return <h6 id={id}>{mainHeadingText}</h6>
            }
            default: {
                return <h2 id={id}>{mainHeadingText}</h2>
            }
        }
    }

    return (
        <div className={`${className} inline-heading`} style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
            {includeURL && props.url ? <Link href={props.url} target="_blank"><HeadingToUse headingType={heading} /></Link> : <HeadingToUse headingType={heading} />}<span>{startMonth} {startYear} - {endMonth} {endYear}</span>
        </div>
    )
}