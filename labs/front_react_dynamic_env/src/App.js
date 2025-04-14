import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import * as Constants from './constants.js';

export default function App() {
  return (
    <div className="App">

      <h1>Sample React Website</h1>

      <Routes>
        <Route
          path="/"
          element={<div>This is root path! "{Constants.RANDOM_VAR}"</div>}
        />

        <Route
          path="/sample"
          element={<div>This is a sample path! "{Constants.RANDOM_VAR}"</div>}
        />

        <Route
          path="*"
          element={<div>404 Page Not Found</div>}
        />
      </Routes>

    </div>
  );
}
