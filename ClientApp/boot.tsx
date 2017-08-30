import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

function renderApp() {
    ReactDOM.render(
        <App />,
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
