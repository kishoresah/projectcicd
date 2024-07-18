// ParentComponent.jsx
import React from 'react';
import WrapperComponent from './WrapperComponent';

function ParentComponentNew() {
    return (
        <WrapperComponent>
            <p>This is a child element which is called from ParentComponentNew and passed html there.</p>
        </WrapperComponent>
    );
}

export default ParentComponentNew;