import React from 'react';
import './App.css';
import {CuboidEditor} from './containers/CuboidEditor';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Cuboid Editor</h1>
            </header>
            <main>
                <CuboidEditor />
            </main>
        </div>
    );
}

export default App;
