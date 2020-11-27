import React, {useState} from 'react';
import JSONEditor from '../json-editor/json-editor';
import LandingPage from '../landing-page/landing-page';

import './app-view.css';

function AppView() {
    const [landingPageScheme, setLandingPageScheme] = useState();
    return (
        <div className="app-wrapper">
            <h1 className="app-title">Landing page editor</h1>
            <div className="app-content">
              <JSONEditor onChange={setLandingPageScheme} />
              <LandingPage
                scheme={landingPageScheme}
              />
            </div>
        </div>
    );
}

export default AppView;
