import Link from "next/link";

export interface InlineHeadingProps {
    endMonth?: string;
    endYear: number | string;
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
    url?: string;
    includeURL?: boolean; 
    id: string;
}

export const InlineHeading = ({...props}:InlineHeadingProps) => {
    const {endMonth, endYear, id, mainHeadingText, startMonth, startYear} = props;

    return (
        <div>
            <div className="inline-heading">
                {props?.includeURL && props.url ? <Link href={props.url} target="_blank"><h3 id={id}>{mainHeadingText}</h3></Link> : <h3 id={id}>{mainHeadingText}</h3>}<span>{startMonth} {startYear} - {endMonth} {endYear}</span>
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
}