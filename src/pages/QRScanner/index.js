import React, { useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import router from 'umi/router';
import styles from './index.less';
import { parseUrlString } from '@/utils/utils';
import { useServerInfo } from '@/hooks/hooks';
const getScannerResult = () =>
  new Promise(resolve => {
    new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 }).render(resultTxt =>
      resolve(resultTxt),
    );
  });

export default () => {
  const [showScanner, setShowScanner] = useState(false);
  const { setServerInfo } = useServerInfo();
  const changeToScanModel = async () => {
    setShowScanner(true);
    const resultTxt = await getScannerResult();
    setServerInfo(parseUrlString(resultTxt));
    router.push('/Camera');
  };
  return (
    <div className={styles.page}>
      <div id="reader" />
      {!showScanner && <button onClick={() => changeToScanModel()}>Scan QR Code</button>}
    </div>
  );
};
