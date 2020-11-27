import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './section-image-text.css';

function SectionImageText({ imageURI, text, title, leftToRight = true }) {
    const sectionClasses = classNames('section-image-text', { 'section-image-text-left': leftToRight });
    const imageClasses = classNames('section-image-text-picture', {'section-image-text-picture-left': leftToRight });

    return (
        <section className={sectionClasses}>
            <div className="section-image-text-description">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <img
                className={imageClasses}
                src={imageURI}
            />
        </section>
    );
}

SectionImageText.propTypes = {
    imageURI: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    leftToRight: PropTypes.bool,
}

export default SectionImageText;