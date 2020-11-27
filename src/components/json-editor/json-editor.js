import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './json-editor.css';

const MOCK_VALUE = JSON.stringify([
    {
        "type": "hero",
        "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
    },
    {
        "type": "image-text",
        "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
        "text": "Sunset from the sky......",
        "title": "Airplane",
        "leftToRight": false
    },
    {
        "type": "data",
        "url": "https://api.publicapis.org/entries",
    }
]);

function JSONEditor({ onChange }) {
    const [value, setInputValue] = useState();
    const [error, setError] = useState(false);

    const onInputChange = (event) => {
        const { target: { value } } = event;

        setInputValue(value);

        try {
            const landingPageScheme = JSON.parse(value);
            console.log('VALID');

            setError(false);
            onChange(landingPageScheme);
        } catch (e) {
            console.log('JSON not valid');
            setError(true);
        }
    };

    const setMockValue = () => {
        setInputValue(MOCK_VALUE);
        onChange(JSON.parse(MOCK_VALUE));
    };

    return (
        <div className="json-editor">
            { !value && <button className="json-editor-mock-btn" onClick={setMockValue}>Click here to insert a mock JSON</button> }
            { error && <p>Please fix error in your JSON</p>}
            <textarea
                className={classNames('json-editor-input', {'json-editor-input-error': error})}
                value={value}
                onChange={onInputChange}
                placeholder="Paste your JSON here"
            />
        </div>
    );
}

JSONEditor.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default JSONEditor;