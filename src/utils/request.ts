import { StringAnyMap } from '@src/types/utils';

export interface IErrorWithResponse extends Error {
  response?: Response;
}

/**
 * Parses the JSON returned by a network request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: IErrorWithResponse = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 */
export default async function request(url: string, options: StringAnyMap) {
  const resp = await fetch(url, options);
  checkStatus(resp);
  return await parseJSON(resp);
}
