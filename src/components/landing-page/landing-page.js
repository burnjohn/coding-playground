import React from 'react';
import PropTypes from 'prop-types';
import LandingSection from "../landing-section/landing-section";

import './landing-page.css';

function LandingPage({ scheme = [] }) {
    return (
        <div className="landing-page">
            { scheme.length > 0 && scheme.map(
                (section, index) => <LandingSection sectionData={section} key={`${section.type}${index}`}/>
            )}
        </div>
    );
}

LandingPage.propTypes = {
    scheme: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string })
    ),
}

export default LandingPage;