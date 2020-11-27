import React from 'react';
import PropTypes from 'prop-types';
import SectionData from "./section-data/section-data";
import SectionHero from "./section-hero/section-hero";
import SectionImageText from "./section-image-text/section-image-text";

export const SECTION_TYPES = {
    IMAGE_TEXT: 'image-text',
    HERO: 'hero',
    DATA: 'data',
};

function LandingSection({ sectionData }) {
    switch (sectionData.type) {
        case SECTION_TYPES.HERO:
            return <SectionHero {...sectionData} />
        case SECTION_TYPES.IMAGE_TEXT:
            return <SectionImageText {...sectionData} />
        case SECTION_TYPES.DATA:
            return <SectionData {...sectionData} />
        default:
            return null;
    }
}

LandingSection.propTypes = {
    sectionData: PropTypes.shape({
        type: PropTypes.string.isRequired
    })
};

export default LandingSection;