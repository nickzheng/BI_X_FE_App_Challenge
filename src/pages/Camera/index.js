import React, { useRef, useState } from 'react';
import styles from './camera.less';
import { getApiStatus, upload } from '@/services';
import { useServerInfo } from '@/hooks/hooks';
import { generateBasicAuth, readFile } from '@/utils/utils';

const Uploader = ({ disabled, serverInfo }) => {
  const fileInputElement = useRef(null);
  const { url, username, password } = serverInfo;
  const uploadImage = async event => {
    const {
      files: [f],
    } = event.target;
    const { file } = await upload({
      url,
      auth: generateBasicAuth({ username, password }),
      payload: JSON.stringify({ picture: await readFile(f) }),
    });
    window.location.href = `${url}/api/v1.0/image/${file}`;
  };
  return (
    <div>
      <button
        disabled={disabled}
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

export default () => {
  const { serverInfo } = useServerInfo();
  const [serverStatus, setServerStatus] = useState({ status: 'unknown' });
  const { url } = serverInfo;
  const checkStatusHandler = async () => {
    const result = await getApiStatus({ url });
    setServerStatus(result);
  };

  return (
    <div className={styles.takePhoto}>
      <div className={styles.content}>
        <button onClick={checkStatusHandler} data-testid="checkServerStatusButton">
          Check Server Status
        </button>
        <div className={styles.status} data-testid="status">
          Status: {serverStatus.status}
        </div>
        <Uploader disabled={serverStatus.status !== 'ok'} serverInfo={serverInfo} />
      </div>
    </div>
  );
};
