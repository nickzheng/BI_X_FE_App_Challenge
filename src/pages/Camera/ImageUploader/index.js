import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ImageUploader = ({ server, status, upload }) => {
  const fileInputElement = useRef(null);
  const { url } = server;
  const uploadImage = async event => {
    const {
      files: [f],
    } = event.target;
    const file = await upload(f);
    window.location.href = `${url}/api/v1.0/image/${file}`;
  };
  return (
    <div>
      <button
        disabled={status !== 'ok'}
        onClick={() => fileInputElement.current.click()}
        data-testid="takePhoto"
      >
        Take Photo & Upload
      </button>
      <input
        data-testid="imageUploader"
        type="file"
        accept="image/*"
        capture="camera"
        ref={fileInputElement}
        style={{ display: 'none' }}
        onChange={uploadImage}
      />
    </div>
  );
};

ImageUploader.propTypes = {
  server: PropTypes.shape({
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  status: PropTypes.string.isRequired,
  upload: PropTypes.func.isRequired,
};

export default ImageUploader;
