import React, { useState } from 'react';
import router from 'umi/router';
import { getScannerResult } from '../../utils/utils';
import { parseUrlString } from '@/utils/utils';
import { useServer } from '@/hooks/hooks';

export default () => {
  const { selectServer } = useServer();
  const [showScanner, setShowScanner] = useState(false);
  const startScanning = async () => {
    setShowScanner(true);
    const resultTxt = await getScannerResult();
    selectServer(parseUrlString(resultTxt));
    router.push('/Camera');
  };
  return (
    <div>
      <div id="reader" />
      {!showScanner && <button onClick={() => startScanning()}>Scan QR Code</button>}
    </div>
  );
};
