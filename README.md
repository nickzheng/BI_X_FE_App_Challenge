# Introduction

## Tech stack

1. react hook (using provider to store shared data)
   I use react `provider`, `useContext`, `useState` to store the shared data serverInfo which got from QR code

```jsx
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
```

2. cypress for e2e

3) html5-qrcode (time limitation)
4) umi.js (faster than Create React App )
5) prettier eslint with commit hook (husky) lint-staged

TODO

- [ ] storybook
- [ ] push hook
- [ ] use storybook snapshots instead of jest snapshots
- [ ] storybook-chromatic
- [ ] unit test

## Development

1. `npm install`
2. `npm start`

```
  App running at:
  - Local:   http://localhost:8000/ (copied to clipboard)
  - Network: http://192.168.31.167:8000/
```

## Linting

lint: `npm run lint`

lint fix: `npm run lint:fix`

## Test

unit test: `npm test`

e2e open cypress: `npm cypress:open`

e2e cypress `npm cypress`

## Build

build: `npm run build`
