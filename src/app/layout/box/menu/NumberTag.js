import React from 'react';

const NumberTag = ({ data }) => {

    return (
        <a>
            {data.text} &nbsp;
            <span className="tag is-dark is-rounded is-small">
                {data.quantity}
            </span>
        </a>
    );
};

export default NumberTag;