
export interface InlineHeadingProps {
    endMonth?: string;
    endYear: number | string;
    mainHeadingText: string;
    startMonth?: string; 
    startYear: number;
}

export const InlineHeading = ({endMonth, endYear, mainHeadingText, startMonth, startYear}:InlineHeadingProps) => (
    <div>
        <div className="inline-heading">
            <h3>{mainHeadingText}</h3><span>{startMonth} {startYear} - {endMonth} {endYear}</span>
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