// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    return <ChildComponent message="Hello, World! USA" details={"This is details message"} />;
}

export default ParentComponent;