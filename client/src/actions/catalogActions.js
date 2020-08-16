import { httpGet } from "./apiWrapper"

export const FETCH_CATALOG_STARTED = "FETCH_CATALOG_STARTED";
export const FETCH_CATALOG_SUCCEEDED = "FETCH_CATALOG_SUCCEEDED";
export const FETCH_CATALOG_FAILED = "FETCH_CATALOG_FAILED";

async function getAsyncCatalogInfo(dispatch, testURL){
  try {
    const URL_CATALOG_INFO = 
      !testURL ? process.env.REACT_APP_FETCH_CATALOG : testURL;
    let requestOptions = {
      method: "GET"
    }
    let data = await httpGet(URL_CATALOG_INFO, requestOptions);
    dispatch({
      type: FETCH_CATALOG_SUCCEEDED,
      payload: {
        items: data
      }
    })
  } catch(error){
    dispatch({
      type: FETCH_CATALOG_FAILED
    })
  }
}

export function fetchCatalogInfo(testURL){
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_CATALOG_STARTED
    });
    return getAsyncCatalogInfo(dispatch, testURL);
  }
}

