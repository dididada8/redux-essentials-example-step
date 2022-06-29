import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client';

import {worker} from './api/server'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
    const container = document.getElementById('root');
    const root = createRoot(container);

    // Start our mock API server
    await worker.start({onUnhandledRequest: 'bypass'})

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    )
}

start()
