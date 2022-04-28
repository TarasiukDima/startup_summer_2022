import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import AppProvider from './components/AppProvider';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
);
