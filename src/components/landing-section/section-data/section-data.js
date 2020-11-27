import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './section-data.css';

const DATA_STRING_LENGTH_LIMITATION = 500;

function fetchContent(url) {
    return fetch(url)
        .then(resp => resp.json())
        .then( data => {
            const dataString = JSON.stringify(data);
            return dataString.slice(0, DATA_STRING_LENGTH_LIMITATION);
        })
        .catch( e => {
            return 'There was an error on data loading';
        });
}

function SectionData({ url }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchContent(url).then( data => setContent(data));
    }, [url]);

    if (!url) {
        return null;
    }

    const onRefresh = () => {
        setContent('Loading ...');
        fetchContent(url).then( data => setContent(data));
    };

    return (
        <section className="section-data">
            <button onClick={onRefresh} className="section-data-refresh-btn">
                Refresh
            </button>
            <p>{content}</p>
        </section>
    );
}

SectionData.propTypes = {
    url: PropTypes.string.isRequired,
};

export default SectionData;