import { ThemeContext } from "@/utils";
import Link from "next/link";
import { CSSProperties, useContext } from "react";

export interface InlineHeadingProps {
    className?: string;
    endMonth?: string;
    endYear: number | string;
    id: string;
    includeURL?: boolean; 
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
    style?: CSSProperties; 
    url?: string;
}

export const InlineHeading = ({...props}:InlineHeadingProps) => {
    const {className, endMonth, endYear, id, includeURL, mainHeadingText, startMonth, startYear, style} = props;
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <div className={`${className} inline-heading`} style={{color: theme=== 'light' ? style?.color : '' }}>
                {includeURL && props.url ? <Link href={props.url} target="_blank"><h3 id={id}>{mainHeadingText}</h3></Link> : <h3 id={id}>{mainHeadingText}</h3>}<span>{startMonth} {startYear} - {endMonth} {endYear}</span>
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