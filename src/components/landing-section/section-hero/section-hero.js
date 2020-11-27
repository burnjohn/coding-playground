import React from 'react';
import propType from 'prop-types';

import './section-hero.css';

function SectionHero({ imageURI }) {
    if (!imageURI) {
        return null;
    }

    return (
        <section className="section-hero">
            <img className="section-hero-image" src={imageURI} />
        </section>
    );
}

SectionHero.propTypes = {
    imageURI: propType.string.isRequired,
};

export default SectionHero;