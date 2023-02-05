import Link from "next/link";

export interface InlineHeadingProps {
    className?: string;
    endMonth?: string;
    endYear: number | string;
    id: string;
    includeURL?: boolean; 
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
    url?: string;
}

export const InlineHeading = ({...props}:InlineHeadingProps) => {
    const {className, endMonth, endYear, id, includeURL, mainHeadingText, startMonth, startYear } = props;

    return (
        <div className={`${className} inline-heading`} style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
            {includeURL && props.url ? <Link href={props.url} target="_blank"><h3 id={id}>{mainHeadingText}</h3></Link> : <h3 id={id}>{mainHeadingText}</h3>}<span>{startMonth} {startYear} - {endMonth} {endYear}</span>
        </div>
    )
}