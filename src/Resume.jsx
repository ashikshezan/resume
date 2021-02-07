import React, { useState } from 'react';
import { BiCloudDownload } from 'react-icons/bi';
import { Document, Page } from 'react-pdf';
import pdf from './ashik_shezan_resume_v2.pdf'


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <nav>
                <div>
                    <a href={pdf} download="ashik_shezan_resume.pdf">Download</a>
                </div>
            </nav>
            <div className="pdf-container">
                <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}
                        onLoadSuccess={removeTextLayerOffset}
                        width={900}
                    />
                </Document>
            </div>
        </>
    );
}

export default Resume

function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    })
}