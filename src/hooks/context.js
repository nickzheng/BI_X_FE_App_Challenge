import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getApiStatus } from '../services';
import { generateBasicAuth, readFile } from '../utils/utils';
import { ServerContext } from './hooks';
import { uploadImage } from '@/services';

export const ServerProvider = ({ children }) => {
  const [server, selectServer] = useState({});
  const [status, setStatus] = useState({ status: 'UNKNOWN' });
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    setLoading(true);
    const result = await getApiStatus({ url: server.url });
    setStatus(result);
    setLoading(false);
  };

  const upload = async f => {
    setLoading(true);
    const { file } = await uploadImage({
      url: server.url,
      auth: generateBasicAuth({ username: server.username, password: server.password }),
      payload: JSON.stringify({ picture: await readFile(f) }),
    });
    setLoading(false);
    return file;
  };

  return (
    <ServerContext.Provider
      value={{
        data: { server, status },
        loading,
        selectServer,
        checkStatus,
        upload,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

ServerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
