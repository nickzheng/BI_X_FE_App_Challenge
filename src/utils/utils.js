export const parseUrlString = resultTxt => {
  const arrayString = resultTxt.replace('https://', '').split(';');
  const [urlString, userNameString, passwordString] = arrayString;
  const [, urlData] = urlString.split(':');
  const url = `https://${urlData}`;
  const [, username] = userNameString.split(':');
  const [, password] = passwordString.split(':');
  return {
    url,
    username,
    password,
  };
};

export const generateBasicAuth = ({ username, password }) =>
  `Basic ${btoa(`${username}:${password}`)}`;

export const readFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const { result } = e.target;
      resolve(result);
    };
    reader.readAsDataURL(file);
  });
};
