import React, { useState } from 'react';
import { ServerInfoContext } from './hooks';

export const ServerInfoProvider = ({ children }) => {
  const [serverInfo, setServerInfo] = useState({});
  return (
    <ServerInfoContext.Provider
      value={{
        setServerInfo,
        serverInfo,
      }}
    >
      {children}
    </ServerInfoContext.Provider>
  );
};
