import fetch from 'cross-fetch';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';

function extractJson(res){
  if (res.ok){
    return res.json();
  }
  throw new Error(res);
}

async function getAsyncLoginDetails(dispatch, username, password){
  try {
    const URL = process.env.REACT_APP_GENERATE_TOKEN;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }
    const response = await fetch(URL, requestOptions);
    const result = await extractJson(response);
    localStorage.setItem('token', JSON.stringify(result.accessToken));
    dispatch({
      type: LOGIN_SUCCEEDED
    })
  } catch (error){
    dispatch({
      type: LOGIN_FAILED
    })
  }
}

export function performLogin(username, password){
  return dispatch => {
    dispatch({
      type: LOGIN_STARTED
    });
    return getAsyncLoginDetails(dispatch, username, password);
  }
}

export function logout(){
  localStorage.clear();
  return {
    type: LOGOUT_SUCCEEDED
  }
}
