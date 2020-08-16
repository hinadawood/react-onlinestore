import fetch from "cross-fetch";

function interceptResponseStatus(res){
  if (res.ok){
    return res.json();
  }
  else if (res.status === 401){     //intercept the response and redirect to login page if 401 unauthorized
    window.location.href = "/login";
    localStorage.clear();
  }
  throw new Error(res.status);
}

function addQueryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

export function updateAuthHeaderAndFetch(url, options = {}){
  if (!options.headers) options.headers = {};
  let token = "Bearer " + JSON.parse(localStorage.getItem("token"));
  options.headers = Object.assign(options.headers, {
    Authorization: token,
    "Content-Type": "application/json"
  });
  if (options.queryParams) {
    url += (url.indexOf("?") === -1 ? "?" : "&") + addQueryParams(options.queryParams);
    delete options.queryParams;
  }
  return fetch(url, options)
}

export async function httpGet(url, options){
  let response = await updateAuthHeaderAndFetch(url, options);
  let result = await interceptResponseStatus(response);
  return result;
}
