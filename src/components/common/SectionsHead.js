import React from 'react';

const SectionsHead = (props) => {
    return (
        <>
            <div className="section_head">
                <h2 className="heading">{props.heading}</h2>
                <p>{props.paragraph}</p>
            </div>
        </>
    );
};

export default SectionsHead;