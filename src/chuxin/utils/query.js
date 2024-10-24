/**
 * @author 初心
 * 处理参数转换
 */
export function parseQuery(url) {
  let params = {};
  if (!url) return params;
  url = decodeURIComponent(url);
  url = url.split("?")[1]?.split("#")[0]?.split("&");
  return url.reduce((prev, current) => {
    const [key, value] = current.split("=");
    prev[key] = value;
    return prev;
  }, params);
}

/**
 * 封装拼接参数到URL的方法
 */
export function appendParamsToUrl(url, params) {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  const paramsStr = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  return `${url}?${paramsStr}`;
}