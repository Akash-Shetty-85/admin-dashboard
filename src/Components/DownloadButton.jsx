import React from 'react';

const DownloadButton = ({ onClick, format }) => {
  return (
    <button onClick={onClick}>
      Download as {format}
    </button>
  );
};

export default DownloadButton;
