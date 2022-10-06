import React from 'react';
import './App.css';

function c1() {
    alert('Circle c1 is clicked');
}

function c2() {
    alert('Circle c2 is clicked');
}

function c3() {
    alert('Circle c3 is clicked');
}

function App() {
    return (
        <div className="App">
            <div className="c1" onClick={c1} />
            <div className="c2" onClick={c2} />
            <div className="c3" onClick={c3} />
        </div>
    );
}

export default App;
