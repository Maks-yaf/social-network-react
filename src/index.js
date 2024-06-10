import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from "./App";

// setInterval (() => {
//     store.dispatch({type:"FAKE"})
// },1000)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
                <MainApp />
    </React.StrictMode>
)


