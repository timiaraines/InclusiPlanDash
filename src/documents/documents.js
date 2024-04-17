import React, { useState } from 'react';
import { Button } from '@mui/material';
import DownloadDialog from '../textEditor/saveDevice';  // Adjust path
import SaveDocumentDialog from './textEditor/save';  // Adjust path

const DocumentsPage = () => {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [currentFileUrl, setCurrentFileUrl] = useState('');
  const [currentFileName, setCurrentFileName] = useState('');

  const handleDownloadClick = (fileUrl, fileName) => {
    setCurrentFileUrl(fileUrl);
    setCurrentFileName(fileName);
    setDownloadOpen(true);
  };

  const handleSaveClick = () => {
    setSaveOpen(true);
  };

  // Dummy data for example
  const fileUrl = 'path/to/your/document';
  const fileName = 'Example Document.pdf';

  return (
    <div>
      <Button onClick={() => handleDownloadClick(fileUrl, fileName)}>Download Document</Button>
      <Button onClick={handleSaveClick}>Save Document</Button>
      <DownloadDialog open={downloadOpen} onClose={() => setDownloadOpen(false)} fileUrl={currentFileUrl} fileName={currentFileName} />
      <SaveDocumentDialog open={saveOpen} onClose={() => setSaveOpen(false)} onSave={(title) => console.log('Saving document with title:', title)} />
    </div>
  );
};

export default DocumentsPage;






