import Link from "next/link";

export interface InlineHeadingProps {
    endMonth?: string;
    endYear: number | string;
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
    url?: string;
    includeURL?: boolean; 
}

export const InlineHeading = ({endMonth, endYear, includeURL, mainHeadingText, startMonth, startYear, url}:InlineHeadingProps) => (
    <div>
        <div className="inline-heading">
            {includeURL && url ? <Link href={url} target="_blank"><h3>{mainHeadingText}</h3></Link> : <h3>{mainHeadingText}</h3>}<span>{startMonth} {startYear} - {endMonth} {endYear}</span>
        </div>
        <style jsx>{`
            .inline-heading {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }
        `}
        </style>
    </div>

)