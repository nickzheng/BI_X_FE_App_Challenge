import React, { useContext } from 'react';
export const ServerInfoContext = React.createContext({});

export const useServerInfo = () => useContext(ServerInfoContext);
