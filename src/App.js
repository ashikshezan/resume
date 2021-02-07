import './App.css';
import Resume from './Resume';

import { Document, Page } from 'react-pdf';
import pdf from './ashik_shezan_resume_v2.pdf'
import { useState } from 'react';

function App() {
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div >
      <div style={{ width: 800, height: "100%" }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={800} onLoadSuccess={removeTextLayerOffset} />
        </Document>
      </div>

    </div>
  );
}

export default App;


