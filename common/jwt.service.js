const Cookie = process.client ? require('js-cookie') : undefined

const ID_TOKEN_KEY = "Bearer";

export const getToken = () => {
  if (process.client) return Cookie.get(ID_TOKEN_KEY);
};

export const saveToken = token => {
  if (process.client) Cookie.set(ID_TOKEN_KEY, token, {expires: 7});
};

export const destroyToken = () => {
  if (process.client) Cookie.remove(ID_TOKEN_KEY);
};

export default {getToken, saveToken, destroyToken};
