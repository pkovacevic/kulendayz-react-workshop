import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function renderApp() {
    ReactDOM.render(
        <div>Hello World!</div>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept(() => {
        renderApp();
    });
}
