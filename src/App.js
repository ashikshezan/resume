import './App.css';
import Resume from './Resume'

import { Document, Page } from 'react-pdf';
import pdf from './ashik_shezan_resume_v2.pdf'
import { useState } from 'react';

function App() {


  return (
    <div className="container">
      <a href={pdf} download="ashik_shezan_resume.pdf">Download</a>
      <Resume />
    </div>
  );
}

export default App;


