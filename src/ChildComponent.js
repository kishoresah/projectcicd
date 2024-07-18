// ChildComponent.jsx
import React from 'react';

function ChildComponent({ message = "this is message", details = "Testing details" }) {
    return <div>{message}--{details}</div>;
}
export default ChildComponent;
