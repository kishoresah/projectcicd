// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function SpreadComponent() {
    const props = { message: 'Hello, World!', details: 'blue' };

    return <ChildComponent {...props} />;
}

export default SpreadComponent;

