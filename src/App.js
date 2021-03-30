import React from 'react';
import data from './api/data.json';
import Global from './app/container/Global/index';
import './App.css'

function App() {
  return (
    <div className="App">
      <Global
      data={data}
      />
    </div>
  );
}

export default App;
