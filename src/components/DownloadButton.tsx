import React from 'react';

const DownloadButton: React.FC<{ fileUrl: string; fileName: string }> = ({
  fileUrl,
  fileName,
}) => {
  return (
    <a className="heroButton" href={fileUrl} download={fileName}>
      Get my CV
    </a>
  );
};

export default DownloadButton;
