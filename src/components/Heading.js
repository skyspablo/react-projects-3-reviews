import React from 'react'
import css from './Heading.module.css';

export const Heading = ({tag = 'h2', title = 'My Title', underlineColor = "#007386", styles = {}}) => {
    const titleElement = React.createElement(tag, {style: styles, className: css["sisdom-heading"]}, title)
    let underlineAlignment = styles.textAlign !== undefined && styles.textAlign === "center" ? "auto" : "unset";

    return (
        <>

            {titleElement}
            <div className={css["sisdom-heading-divisor"]}
                 style={{margin: underlineAlignment, background: underlineColor}}/>

        </>
    )
}