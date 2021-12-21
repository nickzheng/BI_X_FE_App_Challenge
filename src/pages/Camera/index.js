import React from 'react';
import Loading from '../../component/Loading';
import styles from './index.less';
import StatusChecker from './StatusChecker';
import ImageUploader from './ImageUploader';
import { useServer } from '@/hooks/hooks';

export default () => {
  const { data, checkStatus, loading, upload } = useServer();
  const {
    server: { url, username, password },
    status: { status },
  } = data;

  return (
    <div className={styles.content}>
      <StatusChecker
        server={{ url, username, password }}
        status={status}
        checkStatus={checkStatus}
      />
      <ImageUploader server={{ url, username, password }} status={status} upload={upload} />
      <Loading loading={loading} />
    </div>
  );
};
